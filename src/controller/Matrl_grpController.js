const axios = require("axios");
const { upsertgroup } = require("../models/Matrl_grpModel");
require("dotenv").config();

const API_URL = process.env.Matrl_GRP_API;

// Fetch data from SAP API with authentication
const fetchSAPgroups = async () => {
  try {
    console.log("🔍 Fetching group Data from API:", API_URL);

    const response = await axios.get(API_URL, {
      auth: {
        username: process.env.SAP_USERNAME,
        password: process.env.SAP_PASSWORD,
      },
      headers: { Accept: "application/json" },
      responseType: "json",
    });

    if (!response.data) {
      console.warn("⚠️ Received empty response from API");
      throw new Error("Empty response from API");
    }

    console.log("✅ API Response Received. Length:", JSON.stringify(response.data).length);
    console.log(" API Response Data:", JSON.stringify(response.data, null, 2));
    
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching SAP group data:", error.message);
    throw new Error(`SAP API Error: ${error.message}`);
  }
};

// Sync group data with MSSQL (Insert or Update)
const fetchAndStoregroups = async (req, res) => {
  try {
    console.log("🚀 Starting group Data Sync...");
    const jsonData = await fetchSAPgroups();

    if (!jsonData || typeof jsonData !== "object" || !jsonData.d || !Array.isArray(jsonData.d.results)) {
      console.error("❌ API Response Format Incorrect:", JSON.stringify(jsonData).slice(0, 10) + "...");
      return res.status(400).json({ message: "Invalid data format received from SAP" });
    }

    console.log(`📦 Received ${jsonData.d.results.length} groups from API`);

    const groups = jsonData.d.results.map((group, index) => {
      console.log(`🔄 Processing group ${index + 1}:`, group.Matkl);
      return {
        Matkl: String(group.Matkl),
        Spart: String(group.Spart)
      };
    }).filter(Boolean);

    console.log("📌 Final Data Before Upsertion:", JSON.stringify(groups, null, 2));

    const result = await upsertgroup(groups);

    if (!result || typeof result !== "object" || !result.success) {
      console.error(" Error inserted or updating group data:", result?.error || "Unexpected database response");
      if (res) return res.status(500).json({ message: "Error insering or updating group data", error: result?.error || "Database error" });
      return;
    }

    console.log(" group Data Sync Completed Successfully ");

    if (res) {
      return res.status(200).json({
        message: " group data synced successfully",
        insertedRows: result.processedRows.length,
        updatedRows: result.processedRows.length,
        failedRows: result.failedRows.length,
        errors: result.failedRows,
      });
    }

  } catch (error) {
    console.error("❌ Error syncing group data:", error.message);
    if (res) return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = { fetchAndStoregroups };

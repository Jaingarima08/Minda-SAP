const axios = require("axios");
const { insertOrUpdateLastMonthCarry } = require("../models/Last_Month_CarryModel"); // Ensure this model function exists
require("dotenv").config();

const API_URL = process.env.Last_Month_API;

// Convert string to decimal safely
const convertToDecimal = (value) => {
  if (!value || isNaN(value)) return 0.00;
  return parseFloat(value.toString().replace(",", "."));
};

// Fetch last month carry data from SAP API
const fetchSAPLastMonthCarry = async () => {
  try {
    console.log("🔍 Fetching Last Month Carry Data from API:", API_URL);

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
    console.log("📌 API Response Data:", JSON.stringify(response.data, null, 2));

    if (!response.data.d || !Array.isArray(response.data.d.results)) {
      console.error("❌ Invalid API Response Format:", JSON.stringify(response.data).slice(0, 200));
      throw new Error("Invalid data format received from SAP");
    }

    const data = response.data.d.results || [];
    console.log(`📦 Received ${data.length} records`);
    return data;

  } catch (error) {
    console.error("❌ Error fetching Last Month Carry data:", error.message);
    throw new Error(`SAP API Error: ${error.message}`);
  }
};

// Sync last month carry data with database
const fetchAndStoreLastMonthCarry = async (req, res) => {
  try {
    console.log("🚀 Starting Last Month Carry Data Sync...");
    const records = await fetchSAPLastMonthCarry();

    if (!Array.isArray(records) || records.length === 0) {
      console.warn("⚠️ No valid last month carry data received.");
      if (res) return res.status(400).json({ message: "No Last Month Carry data found in SAP" });
      return;
    }

    console.log(`📦 Processing ${records.length} records...`);

    const processedData = records.map((item, index) => {
      if (!item || typeof item !== "object") {
        console.error(`❌ Skipping invalid record at index ${index}:`, item);
        return null;
      }

      return {
        Vbeln: String(item?.Vbeln || ""),
        Posnr: String(item?.Posnr || ""),
        Vtweg: String(item?.Vtweg || ""),
        Spart: String(item?.Spart || ""),
        Fkart: String(item?.Fkart || ""),
        Fktyp: String(item?.Fktyp || ""),
        Vkorg: String(item?.Vkorg || ""),
        Waerk: String(item?.Waerk || ""),
        Gjahr: String(item?.Gjahr || ""),
        Aubel: String(item?.Aubel || ""),
        Aupos: String(item?.Aupos || ""),
        Netwr: convertToDecimal(item?.Netwr),
        Matnr: String(item?.Matnr || ""),
        Fkimg: convertToDecimal(item?.Fkimg),
        Matkl: String(item?.Matkl || ""),
        Kwmeng: convertToDecimal(item?.Kwmeng),
        PendingQty: convertToDecimal(item?.PendingQty),
        OdrVal: convertToDecimal(item?.OdrVal),
        Kunnr: String(item?.Kunnr || ""),
        Kursk: convertToDecimal(item?.Kursk),
        Bzirk: String(item?.Bzirk || ""),
        Zone: String(item?.Zone || ""),
        MonthD: String(item?.MonthD || ""),
      };
    }).filter(Boolean); // Remove null entries

    console.log("📌 Final Processed Data:", JSON.stringify(processedData, null, 2));

    const result = await insertOrUpdateLastMonthCarry(processedData);

    if (!result || typeof result !== "object" || !result.success) {
      console.error("❌ Error inserting or updating data:", result?.error || "Unknown error");
      if (res) return res.status(500).json({ message: "Error inserting or updating data", error: result?.error || "Database error" });
      return;
    }

    console.log("✅ Last Month Carry Data Sync Completed Successfully");

    if (res) {
      return res.status(200).json({
        message: "✅ Last month carry data synced successfully",
        insertedRows: result.processedRows.length,
        updatedRows: result.processedRows.length,
        failedRows: result.failedRows.length,
        errors: result.failedRows,
      });
    }

  } catch (error) {
    console.error("❌ Error syncing data:", error.message);
    if (res) return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = { fetchAndStoreLastMonthCarry };

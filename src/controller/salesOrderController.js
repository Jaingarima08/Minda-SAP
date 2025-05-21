const axios = require("axios");
const { insertOrUpdateSalesOrders } = require("../models/salesOrderModel");
require("dotenv").config();

const API_URL = process.env.Sales_Order_API;

// Convert SAP Date format "/Date(1740355200000)/" to "YYYY-MM-DD HH:MM:SS"
const convertSAPDateTime = (sapDate) => {
  if (!sapDate || typeof sapDate !== 'string') return null;

  const match = sapDate.match(/\/Date\((\d+)(?:[+-]\d+)?\)\//);
  if (!match) return null;

  const timestamp = parseInt(match[1], 10);
  const dateObj = new Date(timestamp);

  const pad = (n) => n.toString().padStart(2, '0');

  const formattedDate =
    `${dateObj.getFullYear()}-${pad(dateObj.getMonth() + 1)}-${pad(dateObj.getDate())} ` +
    `${pad(dateObj.getHours())}:${pad(dateObj.getMinutes())}:${pad(dateObj.getSeconds())}`;

  return formattedDate;
};

// Convert decimal values correctly for MSSQL
const convertToDecimal = (value) => {
  if (!value || isNaN(value)) return "0.00";
  return parseFloat(value.toString().replace(",", ".")).toFixed(2);
};

// Fetch data from SAP API with authentication
const fetchSAPSalesOrders = async () => {
  try {
    console.log("🔍 Fetching Sales Order Data from API:", API_URL);

    const response = await axios.get(API_URL, {
      auth: {
        username: process.env.SAP_USERNAME,
        password: process.env.SAP_PASSWORD,
      },
      headers: { Accept: "application/json" },
      // responseType: "json",
    });

    if (!response.data) {
      console.warn("⚠️ Received empty response from API");
      throw new Error("Empty response from API");
    }

    console.log("✅ API Response Received. Length:", JSON.stringify(response.data).length);
    console.log("📌 API Response Data:", JSON.stringify(response.data, null, 2));

    return response.data;
  } catch (error) {
    console.error("❌ Error fetching SAP sales order data:", error.message);
    throw new Error(`SAP API Error: ${error.message}`);
  }
};

// Sync sales order data with database (Insert + Update)
const fetchAndStoreSalesOrders = async (req, res) => {
  try {
    console.log("🚀 Starting Sales Order Data Sync...");
    const jsonData = await fetchSAPSalesOrders();

    if (!jsonData || typeof jsonData !== "object" || !jsonData.d || !Array.isArray(jsonData.d.results)) {
      console.error("❌ API Response Format Incorrect:", JSON.stringify(jsonData).slice(0, 10) + "...");
      
      if (res) {
        return res.status(400).json({ message: "Invalid data format received from SAP" });
      }
      
      throw new Error("Invalid data format received from SAP");
    }

    console.log(`📦 Received ${jsonData.d.results.length} sales orders from API`);

    const salesOrders = jsonData.d.results.map((order, index) => {
      if (!order || typeof order !== "object") {
        console.error(`❌ Skipping invalid entry at index ${index}:`, order);
        return null;
      }

      return {
        Vtweg: String(order?.Vtweg || ""),
        Posnr: String(order?.Posnr || ""),
        Bzirk: String(order?.Bzirk || ""),
        Vbeln: String(order?.Vbeln || ""),
        Spart: String(order?.Spart || ""),
        Gjahr: parseInt(order?.Gjahr) || null,
        Bztxt: String(order?.Bztxt || ""),
        Vtext: String(order?.Vtext || ""),
        PlannedOrder: convertToDecimal(order?.PlannedOrder),
        Kunnr: String(order?.Kunnr || ""),
        TotalInvoice: convertToDecimal(order?.TotalInvoice),
        Erdat: convertSAPDateTime(order?.Erdat),
        Zone: String(order?.Zone || ""),
        Auart: String(order?.Auart || ""),
        Kursk: convertToDecimal(order?.Kursk, 5),
        Vkorg: String(order?.Vkorg || ""),
        Netwr: convertToDecimal(order?.Netwr, 2),
        Waerk: String(order?.Waerk || ""),
        Matnr: String(order?.Matnr || ""),
        Matkl: String(order?.Matkl || ""),
        Wgbez: String(order?.Wgbez || ""),
        MonthD: String(order?.MonthD || ""),
        MonthDesc: String(order?.MonthDesc || "")
      };      
    }).filter(Boolean);

    console.log("📌 Final Data Before Insert/Update:", JSON.stringify(salesOrders, null, 2));

    const result = await insertOrUpdateSalesOrders(salesOrders);

    if (!result || typeof result !== "object" || !result.success) {
      console.error("❌ Error processing sales order data:", result?.error || "Unexpected database response");

      if (res) {
        return res.status(500).json({ message: "Error inserting or updating sales order data", error: result?.error || "Database error" });
      }

      throw new Error("Database error occurred while inserting/updating sales orders.");
    }

    console.log("✅ Sales Order Data Sync Completed Successfully");

    if (res) {
      return res.status(200).json({
        message: "✅ Sales order data inserted/updated successfully",
        insertedRows: result.processedRows.length,
        updatedRows: result.processedRows.length,
        failedRows: result.failedRows.length,
        errors: result.failedRows,
      });
    }

    return { success: true, message: "Sales orders synced successfully" };

  } catch (error) {
    console.error("❌ Error syncing sales order data:", error.message);

    if (res) {
      return res.status(500).json({ message: "Internal Server Error", error: error.message });
    } else {
      return { success: false, error: error.message }; // Return error for cron job logging
    }
  }
};

module.exports = { fetchAndStoreSalesOrders };

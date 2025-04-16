const express = require("express");
const { fetchAndStoreSalesOrders } = require("../controller/salesOrderController"); // ✅ Correct Import

const router = express.Router();

// Define Route Correctly
router.post("/SalesOrder", fetchAndStoreSalesOrders); // ✅ Use the imported function directly

console.log("✅ Route /api/SalesOrder registered successfully");

module.exports = router;

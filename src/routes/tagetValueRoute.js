const express = require("express");
const router = express.Router();
const { fetchAndInsertSalesData } = require("../controller/tagetValueController");


try {
    router.post("/tagetValues", fetchAndInsertSalesData);
    console.log("✅ Route /api/tagetValues registered successfully");
  } catch (error) {
    console.error("❌ Error setting up route:", error);
  }
  

module.exports = router;

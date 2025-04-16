const express = require("express");
const router = express.Router();
const { fetchAndStoreCustomers } = require("../controller/customerController");


try {
    router.post("/customers", fetchAndStoreCustomers);
    console.log("✅ Route /api/customers registered successfully");
  } catch (error) {
    console.error("❌ Error setting up route:", error);
  }
  

module.exports = router;

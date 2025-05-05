const express = require("express");
const { fetchAndStoreLastMonthCarry } = require("../controller/Last_Month_CarryController");

const router = express.Router();

try {
  router.post("/LastMonthCarry", fetchAndStoreLastMonthCarry);
  console.log("✅ Route /api/LastMonthCarry registered successfully");
} catch (error) {
  console.error("❌ Error setting up Last Month Carry route:", error);
}

module.exports = router;

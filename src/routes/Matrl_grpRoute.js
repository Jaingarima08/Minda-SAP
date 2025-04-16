const express = require("express");
const router = express.Router();
const { fetchAndStoregroups } = require("../controller/Matrl_grpController");


try {
    router.post("/matrl_grp", fetchAndStoregroups);
    console.log("✅ Route /api/matrl_grp registered successfully");
  } catch (error) {
    console.error("❌ Error setting up route:", error);
  }
  

module.exports = router;

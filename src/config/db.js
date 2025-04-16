const sql = require("mssql");
require("dotenv").config();

const config = {
  user: process.env.DB_USER || "amdbi",
  password: process.env.DB_PASSWORD || "Bi@2025",
  server: process.env.DB_HOST || "103.205.67.48",
  database: process.env.DB_NAME || "AMDBIDB",
  port: Number(process.env.DB_PORT) || 2499,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
  pool: {
    max: 10, // Max number of connections
    min: 2, // Maintain at least 2 connections
    idleTimeoutMillis: 3000000, // Close idle connections after 30s
    acquireTimeoutMillis: 6000000, // Allow longer acquire time
  },
  requestTimeout: 6000000, 
  connectionTimeout: 6000000, 
};

// Create a poolPromise
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("✅ MSSQL Connected Successfully!");
    return pool;
  })
  .catch((err) => {
    console.error("❌ MSSQL Connection Failed:", err);
    process.exit(1); // Exit process on failure
  });

// Gracefully close pool on process exit
process.on("SIGINT", async () => {
  console.log("🛑 Closing MSSQL Connection...");
  if (poolPromise) {
    (await poolPromise).close();
  }
  process.exit(0);
});

module.exports = { sql, poolPromise };

const cron = require("node-cron");
const { fetchAndStoregroups } = require("../controller/Matrl_grpController");
const { fetchAndStoreCustomers } = require("../controller/customerController");
const { fetchAndStoreSalesOrders } = require("../controller/salesOrderController");
const { fetchAndStoreSalesInvoices } = require("../controller/salesInvoiceController");
const { fetchAndInsertSalesData } = require("../controller/tagetValueController");
const { fetchAndStoreLastMonthCarry } = require("../controller/Last_Month_CarryController");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const runSequentially = async () => {
    const tasks = [
      { name: "Sales Data", fn: fetchAndStoregroups },
      { name: "Customer Info Data", fn: fetchAndStoreCustomers },
      { name: "Sales Order Data", fn: fetchAndStoreSalesOrders },
      { name: "Sales Invoice Data", fn: fetchAndStoreSalesInvoices },
      { name: "Taget Values Data", fn: fetchAndInsertSalesData },
      { name: "Last Month Data", fn: fetchAndStoreLastMonthCarry },
    ];

    console.log("✅ Starting API Data Refresh...");
    
    for (const { name, fn } of tasks) {
      console.log(`✅ Fetching ${name}...`);
      try {
        await fn();
        console.log(`✅ Successfully inserted/updated ${name}`);
      } catch (error) {
        console.error(`❌ Error in ${name}:`, error);
      }
      await delay(2000);
    }
    
    console.log("✅ All API Data Refreshed Successfully!");
  };

  const scheduleTasks = () => {
    cron.schedule("*/20 * * * *", () => {
      console.log("⏳ Scheduled API Sync Started...");
      runSequentially();
    });

    console.log("✅ API Sync Scheduler Initialized!");
  };



module.exports = { scheduleTasks };

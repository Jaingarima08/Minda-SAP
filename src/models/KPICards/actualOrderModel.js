const { sql, poolPromise } = require("../../config/db");

class ActualOrderModel {
  static async getActualOrder() {
    try {
      const pool = await poolPromise;
      const result = await pool.request().query(`
                SELECT 
  (
    (SELECT SUM(Netwr) FROM PRD_SalesOrder) + 
    (SELECT SUM(OdrVal) FROM PRD_LastMonthCarry)
  ) / 100000.0 AS ActualOrder
                `);
      const actualOrder = result.recordset[0].ActualOrder;
      return { success: true, actualOrder };
    } catch (error) {
      console.error("❌ Error fetching ActualOrder:", error);
      return { success: false, message: "Failed to get Actual Order", error };
    }
  }
}

module.exports = ActualOrderModel;

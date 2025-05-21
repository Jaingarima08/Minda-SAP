const { sql, poolPromise } = require('../../config/db'); // adjust the path as needed

class PlannedOrderModel {
  static async getPlannedOrder() {
    try {
      const pool = await poolPromise;
      const result = await pool.request().query(`
        SELECT SUM(PlannedOrder) AS PlannedOrder FROM PRD_Target_Values
      `);
      
      const plannedOrder = result.recordset[0].PlannedOrder;
      return { success: true, plannedOrder };
    } catch (error) {
      console.error("❌ Error fetching PlannedOrder:", error);
      return { success: false, message: "Failed to get Total Budget", error };
    }
  }
}

module.exports = PlannedOrderModel;

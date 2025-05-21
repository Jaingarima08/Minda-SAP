const { sql, poolPromise } = require('../../config/db'); // adjust the path as needed

class TotalBudgetModel {
  static async getTotalBudget() {
    try {
      const pool = await poolPromise;
      const result = await pool.request().query(`
        SELECT SUM(TotalInvoice) AS TotalBudget FROM PRD_Target_Values
      `);
      
      const totalBudget = result.recordset[0].TotalBudget;
      return { success: true, totalBudget };
    } catch (error) {
      console.error("❌ Error fetching TotalBudget:", error);
      return { success: false, message: "Failed to get Total Budget", error };
    }
  }
}

module.exports = TotalBudgetModel;

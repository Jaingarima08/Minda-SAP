const { sql, poolPromise } = require("../../config/db");

class KPIModel {
  static async getKPIs(filters) {
    const { zone, month, year } = filters;

    // Reusable WHERE clause builder
    const getWhereClause = (tableAlias = "") => {
      const prefix = tableAlias ? tableAlias + "." : "";
      const conditions = [];

      const monthMap = {
       January: '1', February: '2', March: '3', April: '4',
        May: '5', June: '6', July: '7', August: '8',
        September: '9', October: '10', November: '11', December: '12',
      };

      if (month && month !== "All") {
        const numericMonth = monthMap[month.toUpperCase()];
        if (numericMonth) {
          conditions.push(`${prefix}MonthD = '${numericMonth}'`);
        }
      }

      if (year && year !== "All") conditions.push(`${prefix}Gjahr = '${year}'`);
      // Include Zone only if passed
      if (zone && zone !== "All") conditions.push(`${prefix}Zone = '${zone}'`);
      return conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";
    };

    const whereTarget = getWhereClause();
    const whereOrder = getWhereClause();
    const whereInvoice = getWhereClause();
    const whereCarry = getWhereClause();

    try {
      const pool = await poolPromise;

      // Log the final query to debug it
      const query = `
        SELECT 
          (SELECT SUM(TotalInvoice) FROM PRD_Target_Values ${whereTarget}) AS TotalBudget,

          (SELECT SUM(PlannedOrder) FROM PRD_Target_Values ${whereTarget}) AS PlannedOrder,

          (
            (SELECT SUM(Netwr) FROM PRD_SalesOrder ${whereOrder}) + 
            (SELECT SUM(OdrVal) FROM PRD_LastMonthCarry ${whereCarry})
          ) / 100000.0 AS ActualOrder,

          (SELECT SUM(Netwr) FROM PRD_SalesInvoice ${whereInvoice}) / 100000.0 AS ActualInvoice,

          (
            ((SELECT SUM(Netwr) FROM PRD_SalesInvoice ${whereInvoice}) / 100000.0) /
            (((SELECT SUM(Netwr) FROM PRD_SalesOrder ${whereOrder}) + 
              (SELECT SUM(OdrVal) FROM PRD_LastMonthCarry ${whereCarry})) / 100000.0)
          ) * 100 AS Execution,

          (
            (((SELECT SUM(Netwr) FROM PRD_SalesOrder ${whereOrder}) + 
              (SELECT SUM(OdrVal) FROM PRD_LastMonthCarry ${whereCarry})) / 100000.0) /
            (SELECT SUM(PlannedOrder) FROM PRD_Target_Values ${whereTarget})
          ) * 100 AS OrderAchievement
      `;

      // console.log("📄 Final SQL Query:", query); 

      const result = await pool.request().query(query);
      return { success: true, data: result.recordset[0] };
    } catch (error) {
      console.error("❌ Error fetching KPI data in model:", {
        message: error.message,
        code: error.code,
        number: error.number,
        lineNumber: error.lineNumber,
        state: error.state,
        class: error.class,
        serverName: error.serverName,
        procName: error.procName,
        precedingErrors: error.precedingErrors,
      });
      return { success: false, message: "Failed to fetch KPIs", error };
    }
  }
}

module.exports = KPIModel;

const { sql, poolPromise } = require("../config/db");

class SalesModel {
  static async insertOrUpdateSalesData(data) {
    if (!data || data.length === 0) {
      console.warn("⚠️ No sales data to insert or update.");
      return { success: false, message: "No data provided for processing" };
    }

    let pool;
    try {
      pool = await poolPromise;
      const transaction = new sql.Transaction(pool);
      await transaction.begin(); // Start transaction

      for (const item of data) {
        try {
          console.log("🔍 Processing Data:", item);

          await transaction.request()
          .input("Gjahr", sql.VarChar, item.Gjahr)
          .input("MonthD", sql.VarChar, item.MonthD)
          .input("Bzirk", sql.VarChar, item.Bzirk)
          .input("Matkl", sql.VarChar, item.Matkl)
          .input("Spart", sql.VarChar, item.Spart || null)
          .input("Zone", sql.VarChar, item.Zone || "UNKNOWN")
          .input("Bztxt", sql.VarChar, item.Bztxt || "UNKNOWN")
          .input("Wgbez", sql.VarChar, item.Wgbez || "UNKNOWN")
          .input("PlannedOrder", sql.Decimal(18, 3), parseFloat(item.PlannedOrder) || 0.0)
          .input("TotalInvoice", sql.Decimal(18, 3), parseFloat(item.TotalInvoice) || 0.0)
            .query(`
              MERGE INTO PRD_Target_Values AS target
              USING (SELECT @Gjahr AS Gjahr, @MonthD AS MonthD, @Bzirk AS Bzirk, @Matkl AS Matkl) AS source
              ON target.Gjahr = source.Gjahr AND target.MonthD = source.MonthD 
                AND target.Bzirk = source.Bzirk AND target.Matkl = source.Matkl
              WHEN MATCHED THEN 
                UPDATE SET  Spart = @Spart,
                  Zone = @Zone,
                  Bztxt = @Bztxt,
                  Wgbez = @Wgbez,
                  PlannedOrder = @PlannedOrder,
                  TotalInvoice = @TotalInvoice
              WHEN NOT MATCHED THEN 
                INSERT ( Gjahr, MonthD, Bzirk, Matkl, Spart, Zone, Bztxt, Wgbez, PlannedOrder, TotalInvoice)
                VALUES ( @Gjahr, @MonthD, @Bzirk, @Matkl, @Spart, @Zone, @Bztxt, @Wgbez, @PlannedOrder, @TotalInvoice);
            `);

          console.log(`✅ Processed: Matkl=${item.Matkl}, Gjahr=${item.Gjahr}, MonthD=${item.MonthD}`);
        } catch (err) {
          console.error(`❌ Failed to process row for Matkl=${item.Matkl}:`, err.message);
        }
      }

      await transaction.commit();
      console.log("✅ All sales data inserted/updated successfully");
      return { success: true, message: "Data inserted/updated successfully" };
    } catch (error) {
      console.error("❌ Transaction Failed:", error);
      return { success: false, message: "Error processing data", error };
    }
  }
}

module.exports = SalesModel;

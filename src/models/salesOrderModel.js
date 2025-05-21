const { sql, poolPromise } = require("../config/db");

const insertOrUpdateSalesOrders = async (salesOrders) => {
  if (!salesOrders || salesOrders.length === 0) {
    console.warn("⚠️ No sales order data to insert or update.");
    return { success: false, message: "No data provided for processing" };
  }

  try {
    const pool = await poolPromise;
    const transaction = new sql.Transaction(pool);
    await transaction.begin();

    for (let order of salesOrders) {
      try {
        console.log("🔍 Processing Sales Order:", order.Vbeln);

        await transaction.request()
          .input("Vbeln", sql.VarChar, order.Vbeln)
          .input("Posnr", sql.VarChar, order.Posnr)
          .input("Kunnr", sql.VarChar, order.Kunnr)
          .input("Erdat", sql.DateTime, order.Erdat ? new Date(order.Erdat) : null)
          .input("Auart", sql.VarChar, order.Auart)
          .input("Vkorg", sql.VarChar, order.Vkorg)
          .input("Netwr", sql.Decimal(18, 2), parseFloat(order.Netwr) || 0.00)
          .input("Waerk", sql.VarChar, order.Waerk)
          .input("Matnr", sql.VarChar, order.Matnr)
          .input("Matkl", sql.VarChar, order.Matkl)
          .input("Wgbez", sql.VarChar, order.Wgbez)
          .input("Spart", sql.VarChar, order.Spart)
          .input("Vtext", sql.VarChar, order.Vtext)
          .input("Bzirk", sql.VarChar, order.Bzirk)
          .input("Bztxt", sql.VarChar, order.Bztxt)
          .input("Zone", sql.VarChar, order.Zone)
          .input("PlannedOrder", sql.Decimal(18, 3), parseFloat(order.PlannedOrder) || 0.000)
          .input("Vtweg", sql.VarChar, order.Vtweg)
          .input("Gjahr", sql.Int, order.Gjahr || null)
          .input("TotalInvoice", sql.Decimal(18, 3), parseFloat(order.TotalInvoice) || 0.000)
          .input("Kursk", sql.Decimal(18, 5), parseFloat(order.Kursk) || 0.00000)
          .input("MonthD", sql.VarChar(20), order.MonthD)
          .input("MonthDesc", sql.VarChar(20), order.MonthDesc)
          .query(`
            MERGE INTO PRD_SalesOrder AS target
            USING (SELECT @Vbeln AS Vbeln, @Posnr AS Posnr) AS source
            ON target.Vbeln = source.Vbeln AND target.Posnr = source.Posnr
            WHEN MATCHED THEN 
              UPDATE SET 
                Kunnr = @Kunnr,
                Erdat = @Erdat,
                Auart = @Auart,
                Vkorg = @Vkorg,
                Netwr = @Netwr,
                Waerk = @Waerk,
                Matnr = @Matnr,
                Matkl = @Matkl,
                Wgbez = @Wgbez,
                Spart = @Spart,
                Vtext = @Vtext,
                Bzirk = @Bzirk,
                Bztxt = @Bztxt,
                Zone = @Zone,
                PlannedOrder = @PlannedOrder,
                Vtweg = @Vtweg,
                Gjahr = @Gjahr,
                TotalInvoice = @TotalInvoice,
                Kursk = @Kursk,
                MonthD = @MonthD,
                MonthDesc = @MonthDesc
            WHEN NOT MATCHED THEN 
              INSERT (
                Vbeln, Posnr, Kunnr, Erdat, Auart, Vkorg, Netwr, Waerk, Matnr, Matkl, Wgbez,
                Spart, Vtext, Bzirk, Bztxt, Zone, PlannedOrder, Vtweg, Gjahr, TotalInvoice, Kursk, MonthD, MonthDesc
              )
              VALUES (
                @Vbeln, @Posnr, @Kunnr, @Erdat, @Auart, @Vkorg, @Netwr, @Waerk, @Matnr, @Matkl, @Wgbez,
                @Spart, @Vtext, @Bzirk, @Bztxt, @Zone, @PlannedOrder, @Vtweg, @Gjahr, @TotalInvoice, @Kursk, @MonthD, @MonthDesc
              );
          `);

        console.log(`✅ Processed: Vbeln=${order.Vbeln}`);
      } catch (err) {
        console.error(`❌ Failed to process sales order ${order.Vbeln}:`, err.message);
      }
    }

    await transaction.commit();
    console.log("✅ All sales order data processed successfully.");
    return { success: true, message: "Data inserted/updated successfully" };

  } catch (error) {
    console.error("❌ Transaction Failed:", error);
    return { success: false, message: "Error processing data", error };
  }
};

module.exports = { insertOrUpdateSalesOrders };

const { sql, poolPromise } = require("../config/db");

// Convert string to decimal
const parseDecimal = (value) => {
  if (!value || isNaN(value)) return 0.00;
  return parseFloat(value);
};

// Insert or Update Last Month Carry Data
const insertOrUpdateLastMonthCarry = async (data) => {
  if (!data || data.length === 0) {
    console.warn("⚠️ No Last Month Carry data to process.");
    return { success: false, message: "No data provided for upsertion." };
  }

  try {
    const pool = await poolPromise;
    const transaction = new sql.Transaction(pool);
    await transaction.begin();

    for (const item of data) {
      try {
        console.log("🔄 Processing Last Month Carry:", item.Vbeln, item.Posnr);

        await transaction.request()
          .input("Vbeln", sql.VarChar, item.Vbeln)
          .input("Posnr", sql.VarChar, item.Posnr)
          .input("Vtweg", sql.VarChar, item.Vtweg || "")
          .input("Spart", sql.VarChar, item.Spart || "")
          .input("Fkart", sql.VarChar, item.Fkart || "")
          .input("Fktyp", sql.VarChar, item.Fktyp || "")
          .input("Vkorg", sql.VarChar, item.Vkorg || "")
          .input("Waerk", sql.VarChar, item.Waerk || "")
          .input("Gjahr", sql.Int, parseInt(item.Gjahr) || null)
          .input("Aubel", sql.VarChar, item.Aubel || "")
          .input("Aupos", sql.VarChar, item.Aupos || "")
          .input("Netwr", sql.Decimal(18, 2), parseDecimal(item.Netwr))
          .input("Matnr", sql.VarChar, item.Matnr || "")
          .input("Fkimg", sql.Decimal(18, 3), parseDecimal(item.Fkimg))
          .input("Matkl", sql.VarChar, item.Matkl || "")
          .input("Kwmeng", sql.Decimal(18, 3), parseDecimal(item.Kwmeng))
          .input("PendingQty", sql.Decimal(18, 3), parseDecimal(item.PendingQty))
          .input("OdrVal", sql.Decimal(18, 2), parseDecimal(item.OdrVal))
          .input("Kunnr", sql.VarChar, item.Kunnr || "")
          .input("Kursk", sql.Decimal(18, 5), parseDecimal(item.Kursk))
          .input("Bzirk", sql.VarChar, item.Bzirk || "")
          .input("Zone", sql.VarChar, item.Zone || "")
          .input("MonthD", sql.VarChar, item.MonthD || "")
.query(`
  MERGE INTO PRD_LastMonthCarry AS target
  USING (SELECT @Vbeln AS Vbeln, @Posnr AS Posnr) AS source
  ON target.Vbeln = source.Vbeln AND target.Posnr = source.Posnr
  WHEN MATCHED THEN
    UPDATE SET
      Vtweg = @Vtweg,
      Spart = @Spart,
      Fkart = @Fkart,
      Fktyp = @Fktyp,
      Vkorg = @Vkorg,
      Waerk = @Waerk,
      Gjahr = @Gjahr,
      Aubel = @Aubel,
      Aupos = @Aupos,
      Netwr = @Netwr,
      Matnr = @Matnr,
      Fkimg = @Fkimg,
      Matkl = @Matkl,
      Kwmeng = @Kwmeng,
      PendingQty = @PendingQty,
      OdrVal = @OdrVal,
      Kunnr = @Kunnr,
      Kursk = @Kursk,
      Bzirk = @Bzirk,
      Zone = @Zone,
      MonthD = @MonthD
  WHEN NOT MATCHED THEN
    INSERT (
      Vbeln, Posnr, Vtweg, Spart, Fkart, Fktyp, Vkorg, Waerk,
      Gjahr, Aubel, Aupos, Netwr, Matnr, Fkimg, Matkl,
      Kwmeng, PendingQty, OdrVal, Kunnr, Kursk, Bzirk, Zone, MonthD
    )
    VALUES (
      @Vbeln, @Posnr, @Vtweg, @Spart, @Fkart, @Fktyp, @Vkorg, @Waerk,
      @Gjahr, @Aubel, @Aupos, @Netwr, @Matnr, @Fkimg, @Matkl,
      @Kwmeng, @PendingQty, @OdrVal, @Kunnr, @Kursk, @Bzirk, @Zone, @MonthD
    );
`);

        console.log(`✅ Upserted: Vbeln=${item.Vbeln}, Posnr=${item.Posnr}`);
      } catch (err) {
        console.error(`❌ Error processing ${item.Vbeln}-${item.Posnr}:`, err.message);
      }
    }

    await transaction.commit();
    console.log("✅ All records upserted successfully.");
    return { success: true, message: "Data inserted/updated successfully." };
  } catch (error) {
    console.error("❌ Transaction failed:", error);
    return { success: false, message: "Error inserting/updating data", error };
  }
};

module.exports = { insertOrUpdateLastMonthCarry };

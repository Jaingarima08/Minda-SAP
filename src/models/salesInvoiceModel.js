const { sql, poolPromise } = require("../config/db");

// Convert SAP OData Date Format to a JavaScript Date object
const convertSAPDateTime = (sapDate) => {
  if (!sapDate || !sapDate.match(/\d+/)) return new Date("1900-01-01T00:00:00"); // Default date if missing
  const timestamp = parseInt(sapDate.match(/\d+/)[0], 10);
  return new Date(timestamp);
};

// Convert string number to decimal
const convertToDecimal = (value) => {
  if (!value || isNaN(value)) return 0.00;
  return parseFloat(value.toString().replace(",", "."));
};

// Function to Insert or Update Sales Invoices using MERGE
const insertOrUpdateSalesInvoices = async (data) => {
  if (!data || data.length === 0) {
    console.warn("⚠️ No sales invoice data to insert or update.");
    return { success: false, message: "No data provided for upsertion" };
  }

  try {
    const pool = await poolPromise;
    const transaction = new sql.Transaction(pool);
    await transaction.begin();

    for (let invoice of data) {
      try {
        console.log("🔍 Processing Invoice:", invoice.Vbeln, invoice.Posnr);

        await transaction.request()
        .input("Vbeln", sql.VarChar, invoice.Vbeln)
        .input("Posnr", sql.VarChar, invoice.Posnr)
        .input("Matnr", sql.VarChar, invoice.Matnr)
        .input("PlannedOrder", sql.Decimal(18, 3), parseFloat(invoice.PlannedOrder) || 0.000)
        .input("Wgbez", sql.VarChar, invoice.Wgbez)
        .input("Bzirk", sql.VarChar, invoice.Bzirk)
        .input("Netwr", sql.Decimal(18, 2), parseFloat(invoice.Netwr) || 0.00)
        .input("Vtweg", sql.VarChar, invoice.Vtweg)
        .input("Matkl", sql.VarChar, invoice.Matkl)
        .input("Totalinvoice", sql.Decimal(18, 3), parseFloat(invoice.Totalinvoice) || 0.000)
        .input("Spart", sql.VarChar, invoice.Spart)
        .input("Zone", sql.VarChar, invoice.Zone)
        .input("Fkart", sql.VarChar, invoice.Fkart)
        .input("Kunag", sql.VarChar, invoice.Kunag)
        .input("Fktyp", sql.VarChar, invoice.Fktyp)
        .input("Aupos", sql.VarChar, invoice.Aupos)
        .input("Werks", sql.VarChar, invoice.Werks)
        .input("Vkorg", sql.VarChar, invoice.Vkorg)
        .input("Waerk", sql.VarChar, invoice.Waerk)
        .input("Gjahr", sql.Int, parseInt(invoice.Gjahr) || null)
        .input("Fkdat", sql.DateTime, invoice.Fkdat)
        .input("Aubel", sql.VarChar, invoice.Aubel)
        .query(`
          MERGE INTO PRD_SalesInvoice AS target
          USING (SELECT @Vbeln AS Vbeln, @Posnr AS Posnr) AS source
          ON target.Vbeln = source.Vbeln AND target.Posnr = source.Posnr
          WHEN MATCHED THEN 
            UPDATE SET 
              Matnr = @Matnr,
              PlannedOrder = @PlannedOrder,
              Wgbez = @Wgbez,
              Bzirk = @Bzirk,
              Netwr = @Netwr,
              Vtweg = @Vtweg,
              Matkl = @Matkl,
              TotalInvoice = @TotalInvoice,
              Spart = @Spart,
              Zone = @Zone,
              Fkart = @Fkart,
              Kunag = @Kunag,
              Fktyp = @Fktyp,
              Aupos = @Aupos,
              Werks = @Werks,
              Vkorg = @Vkorg,
              Waerk = @Waerk,
              Gjahr = @Gjahr,
              Fkdat = @Fkdat,
              Aubel = @Aubel
          WHEN NOT MATCHED THEN 
            INSERT (Vbeln, Posnr, Matnr, PlannedOrder, Wgbez, Bzirk, Netwr, Vtweg, Matkl, TotalInvoice, Spart, Zone, Fkart, Kunag, Fktyp, Aupos, Werks, Vkorg, Waerk, Gjahr, Fkdat, Aubel)
            VALUES (@Vbeln, @Posnr, @Matnr, @PlannedOrder, @Wgbez, @Bzirk, @Netwr, @Vtweg, @Matkl, @TotalInvoice, @Spart, @Zone, @Fkart, @Kunag, @Fktyp, @Aupos, @Werks, @Vkorg, @Waerk, @Gjahr, @Fkdat, @Aubel);
        `);

        console.log(`✅ Upserted: Vbeln=${invoice.Vbeln}, Posnr=${invoice.Posnr}`);
      } catch (err) {
        console.error(`❌ Failed to process invoice ${invoice.Vbeln}-${invoice.Posnr}:`, err.message);
      }
    }

    await transaction.commit();
    console.log("✅ All sales invoices upserted successfully.");
    return { success: true, message: "Data inserted/updated successfully" };
  } catch (error) {
    console.error("❌ Transaction Failed:", error);
    return { success: false, message: "Error inserting/updating data", error };
  }
};

module.exports = { insertOrUpdateSalesInvoices };

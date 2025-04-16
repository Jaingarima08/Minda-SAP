const { sql, poolPromise } = require("../config/db");

const upsertgroup = async (groups) => {
  if (!groups || groups.length === 0) {
    console.warn("⚠️ No group data to insert or update.");
    return { success: false, message: "No data provided for upsertion" };
  }

  try {
    const pool = await poolPromise; // Ensure poolPromise is awaited
    const transaction = new sql.Transaction(pool);
    await transaction.begin(); // Start transaction

    for (let group of groups) {
      try {
        console.log("🔍 Processing group:", group.Matkl);

        await transaction.request()
          .input("Matkl", sql.VarChar, group.Matkl)
          .input("Spart", sql.VarChar, group.Spart)
          .query(`
            MERGE INTO PRD_Matrl_GRP AS target
            USING (SELECT @Matkl AS Matkl, @Spart AS Spart) AS source
            ON target.Matkl = source.Matkl AND target.Spart = source.Spart
            WHEN MATCHED THEN
              UPDATE SET Matkl = @Matkl, Spart = @Spart
            WHEN NOT MATCHED THEN
              INSERT (Matkl, Spart)
              VALUES (@Matkl, @Spart);
          `);

        console.log(`✅ Upserted: Matkl=${group.Matkl}`);
      } catch (err) {
        console.error(`❌ Failed to process group ${group.Matkl}:`, err.message);
      }
    }

    await transaction.commit();
    console.log("✅ All group data upserted successfully.");
    return { success: true, message: "Data inserted/updated successfully" };

  } catch (error) {
    console.error("❌ Transaction Failed:", error);
    return { success: false, message: "Error inserting/updating data", error };
  }
};

module.exports = { upsertgroup };

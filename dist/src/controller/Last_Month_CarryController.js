const a3_0x4e5609 = a3_0x52b8;
(function (_0x1b9533, _0x48a2bd) {
  const _0x5390b0 = a3_0x52b8,
    _0x8b0a01 = _0x1b9533();
  while (!![]) {
    try {
      const _0x55955e =
        (parseInt(_0x5390b0(0x13a)) / 0x1) *
          (-parseInt(_0x5390b0(0x139)) / 0x2) +
        -parseInt(_0x5390b0(0x114)) / 0x3 +
        -parseInt(_0x5390b0(0x12a)) / 0x4 +
        -parseInt(_0x5390b0(0x11c)) / 0x5 +
        parseInt(_0x5390b0(0x120)) / 0x6 +
        parseInt(_0x5390b0(0x126)) / 0x7 +
        parseInt(_0x5390b0(0x121)) / 0x8;
      if (_0x55955e === _0x48a2bd) break;
      else _0x8b0a01["push"](_0x8b0a01["shift"]());
    } catch (_0x533c99) {
      _0x8b0a01["push"](_0x8b0a01["shift"]());
    }
  }
})(a3_0x480a, 0x388bd);
const axios = require(a3_0x4e5609(0x142)),
  { insertOrUpdateLastMonthCarry } = require("../models/Last_Month_CarryModel");
function a3_0x52b8(_0x2e7383, _0x1db504) {
  const _0x480a07 = a3_0x480a();
  return (
    (a3_0x52b8 = function (_0x52b859, _0x53152) {
      _0x52b859 = _0x52b859 - 0x114;
      let _0xa43439 = _0x480a07[_0x52b859];
      return _0xa43439;
    }),
    a3_0x52b8(_0x2e7383, _0x1db504)
  );
}
function a3_0x480a() {
  const _0x259469 = [
    "Waerk",
    "filter",
    "SAP_PASSWORD",
    "Aupos",
    "slice",
    "replace",
    "Last_Month_API",
    "env",
    "❌\x20Error\x20inserting\x20or\x20updating\x20data:",
    "2DOHYFu",
    "55673cdkzQR",
    "get",
    "Kunnr",
    "Kursk",
    "Vbeln",
    "message",
    "toString",
    "application/json",
    "axios",
    "results",
    "Vtweg",
    "📦\x20Received\x20",
    "❌\x20Invalid\x20API\x20Response\x20Format:",
    "SAP\x20API\x20Error:\x20",
    "📌\x20API\x20Response\x20Data:",
    "Bzirk",
    "Fkart",
    "⚠️\x20No\x20valid\x20last\x20month\x20carry\x20data\x20received.",
    "SAP_USERNAME",
    "stringify",
    "Internal\x20Server\x20Error",
    "MonthD",
    "✅\x20Last\x20month\x20carry\x20data\x20synced\x20successfully",
    "error",
    "Gjahr",
    "❌\x20Error\x20fetching\x20Last\x20Month\x20Carry\x20data:",
    "Spart",
    "No\x20Last\x20Month\x20Carry\x20data\x20found\x20in\x20SAP",
    "length",
    "Database\x20error",
    "845778AGDCZX",
    "Zone",
    "Netwr",
    "exports",
    "warn",
    "log",
    "Error\x20inserting\x20or\x20updating\x20data",
    "📦\x20Processing\x20",
    "1272970bGxcgj",
    "❌\x20Error\x20syncing\x20data:",
    "Matnr",
    "status",
    "1304280UmGRqS",
    "5736432vLqBjh",
    "json",
    "processedRows",
    "Fktyp",
    "data",
    "1485106xqhbJB",
    "🔍\x20Fetching\x20Last\x20Month\x20Carry\x20Data\x20from\x20API:",
    "object",
    "config",
    "1291144BNUZkp",
    "\x20records",
    "failedRows",
    "Aubel",
    "Empty\x20response\x20from\x20API",
    "❌\x20Skipping\x20invalid\x20record\x20at\x20index\x20",
  ];
  a3_0x480a = function () {
    return _0x259469;
  };
  return a3_0x480a();
}
require("dotenv")[a3_0x4e5609(0x129)]();
const API_URL = process["env"][a3_0x4e5609(0x136)],
  convertToDecimal = (_0xe11246) => {
    const _0x38eaf9 = a3_0x4e5609;
    if (!_0xe11246 || isNaN(_0xe11246)) return 0x0;
    return parseFloat(
      _0xe11246[_0x38eaf9(0x140)]()[_0x38eaf9(0x135)](",", ".")
    );
  },
  fetchSAPLastMonthCarry = async () => {
    const _0x2cc390 = a3_0x4e5609;
    try {
      console[_0x2cc390(0x119)](_0x2cc390(0x127), API_URL);
      const _0xc7a5f6 = await axios[_0x2cc390(0x13b)](API_URL, {
        auth: {
          username: process[_0x2cc390(0x137)][_0x2cc390(0x14c)],
          password: process[_0x2cc390(0x137)][_0x2cc390(0x132)],
        },
        headers: { Accept: _0x2cc390(0x141) },
        responseType: _0x2cc390(0x122),
      });
      if (!_0xc7a5f6[_0x2cc390(0x125)]) {
        console[_0x2cc390(0x118)](
          "⚠️\x20Received\x20empty\x20response\x20from\x20API"
        );
        throw new Error(_0x2cc390(0x12e));
      }
      console[_0x2cc390(0x119)](
        "✅\x20API\x20Response\x20Received.\x20Length:",
        JSON[_0x2cc390(0x14d)](_0xc7a5f6["data"])[_0x2cc390(0x156)]
      ),
        console[_0x2cc390(0x119)](
          _0x2cc390(0x148),
          JSON["stringify"](_0xc7a5f6["data"], null, 0x2)
        );
      if (
        !_0xc7a5f6[_0x2cc390(0x125)]["d"] ||
        !Array["isArray"](_0xc7a5f6[_0x2cc390(0x125)]["d"][_0x2cc390(0x143)])
      ) {
        console[_0x2cc390(0x151)](
          _0x2cc390(0x146),
          JSON[_0x2cc390(0x14d)](_0xc7a5f6[_0x2cc390(0x125)])[_0x2cc390(0x134)](
            0x0,
            0xc8
          )
        );
        throw new Error("Invalid\x20data\x20format\x20received\x20from\x20SAP");
      }
      const _0x53ae1d = _0xc7a5f6[_0x2cc390(0x125)]["d"]["results"] || [];
      return (
        console[_0x2cc390(0x119)](
          _0x2cc390(0x145) + _0x53ae1d["length"] + _0x2cc390(0x12b)
        ),
        _0x53ae1d
      );
    } catch (_0x3e858b) {
      console[_0x2cc390(0x151)](_0x2cc390(0x153), _0x3e858b["message"]);
      throw new Error(_0x2cc390(0x147) + _0x3e858b[_0x2cc390(0x13f)]);
    }
  },
  fetchAndStoreLastMonthCarry = async (_0x37021b, _0x80a4d) => {
    const _0x5d3553 = a3_0x4e5609;
    try {
      console[_0x5d3553(0x119)](
        "🚀\x20Starting\x20Last\x20Month\x20Carry\x20Data\x20Sync..."
      );
      const _0xfe0d25 = await fetchSAPLastMonthCarry();
      if (!Array["isArray"](_0xfe0d25) || _0xfe0d25["length"] === 0x0) {
        console[_0x5d3553(0x118)](_0x5d3553(0x14b));
        if (_0x80a4d)
          return _0x80a4d["status"](0x190)[_0x5d3553(0x122)]({
            message: _0x5d3553(0x155),
          });
        return;
      }
      console["log"](_0x5d3553(0x11b) + _0xfe0d25["length"] + "\x20records...");
      const _0x17f2b5 = _0xfe0d25["map"]((_0x5e153e, _0x3bc6a0) => {
        const _0x5aeb79 = _0x5d3553;
        if (!_0x5e153e || typeof _0x5e153e !== "object")
          return (
            console["error"](_0x5aeb79(0x12f) + _0x3bc6a0 + ":", _0x5e153e),
            null
          );
        return {
          Vbeln: String(_0x5e153e?.[_0x5aeb79(0x13e)] || ""),
          Posnr: String(_0x5e153e?.["Posnr"] || ""),
          Vtweg: String(_0x5e153e?.[_0x5aeb79(0x144)] || ""),
          Spart: String(_0x5e153e?.[_0x5aeb79(0x154)] || ""),
          Fkart: String(_0x5e153e?.[_0x5aeb79(0x14a)] || ""),
          Fktyp: String(_0x5e153e?.[_0x5aeb79(0x124)] || ""),
          Vkorg: String(_0x5e153e?.["Vkorg"] || ""),
          Waerk: String(_0x5e153e?.[_0x5aeb79(0x130)] || ""),
          Gjahr: String(_0x5e153e?.[_0x5aeb79(0x152)] || ""),
          Aubel: String(_0x5e153e?.[_0x5aeb79(0x12d)] || ""),
          Aupos: String(_0x5e153e?.[_0x5aeb79(0x133)] || ""),
          Netwr: convertToDecimal(_0x5e153e?.[_0x5aeb79(0x116)]),
          Matnr: String(_0x5e153e?.[_0x5aeb79(0x11e)] || ""),
          Fkimg: convertToDecimal(_0x5e153e?.["Fkimg"]),
          Matkl: String(_0x5e153e?.["Matkl"] || ""),
          Kwmeng: convertToDecimal(_0x5e153e?.["Kwmeng"]),
          PendingQty: convertToDecimal(_0x5e153e?.["PendingQty"]),
          OdrVal: convertToDecimal(_0x5e153e?.["OdrVal"]),
          Kunnr: String(_0x5e153e?.[_0x5aeb79(0x13c)] || ""),
          Kursk: convertToDecimal(_0x5e153e?.[_0x5aeb79(0x13d)]),
          Bzirk: String(_0x5e153e?.[_0x5aeb79(0x149)] || ""),
          Zone: String(_0x5e153e?.[_0x5aeb79(0x115)] || ""),
          MonthD: String(_0x5e153e?.[_0x5aeb79(0x14f)] || ""),
        };
      })[_0x5d3553(0x131)](Boolean);
      console["log"](
        "📌\x20Final\x20Processed\x20Data:",
        JSON[_0x5d3553(0x14d)](_0x17f2b5, null, 0x2)
      );
      const _0xfd94ce = await insertOrUpdateLastMonthCarry(_0x17f2b5);
      if (
        !_0xfd94ce ||
        typeof _0xfd94ce !== _0x5d3553(0x128) ||
        !_0xfd94ce["success"]
      ) {
        console[_0x5d3553(0x151)](
          _0x5d3553(0x138),
          _0xfd94ce?.[_0x5d3553(0x151)] || "Unknown\x20error"
        );
        if (_0x80a4d)
          return _0x80a4d[_0x5d3553(0x11f)](0x1f4)[_0x5d3553(0x122)]({
            message: _0x5d3553(0x11a),
            error: _0xfd94ce?.[_0x5d3553(0x151)] || _0x5d3553(0x157),
          });
        return;
      }
      console[_0x5d3553(0x119)](
        "✅\x20Last\x20Month\x20Carry\x20Data\x20Sync\x20Completed\x20Successfully"
      );
      if (_0x80a4d)
        return _0x80a4d["status"](0xc8)[_0x5d3553(0x122)]({
          message: _0x5d3553(0x150),
          insertedRows: _0xfd94ce["processedRows"][_0x5d3553(0x156)],
          updatedRows: _0xfd94ce[_0x5d3553(0x123)]["length"],
          failedRows: _0xfd94ce[_0x5d3553(0x12c)][_0x5d3553(0x156)],
          errors: _0xfd94ce["failedRows"],
        });
    } catch (_0x4d26db) {
      console[_0x5d3553(0x151)](_0x5d3553(0x11d), _0x4d26db[_0x5d3553(0x13f)]);
      if (_0x80a4d)
        return _0x80a4d["status"](0x1f4)["json"]({
          message: _0x5d3553(0x14e),
          error: _0x4d26db[_0x5d3553(0x13f)],
        });
    }
  };
module[a3_0x4e5609(0x117)] = {
  fetchAndStoreLastMonthCarry: fetchAndStoreLastMonthCarry,
};

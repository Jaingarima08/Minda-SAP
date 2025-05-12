const a10_0x5e39d0 = a10_0x5103;
function a10_0x118d() {
  const _0x15e2c4 = [
    "Transaction",
    "OdrVal",
    "Fkimg",
    "Int",
    "PendingQty",
    "log",
    "🔄\x20Processing\x20Last\x20Month\x20Carry:",
    "Vbeln",
    "Vtweg",
    "Aupos",
    "Vkorg",
    "✅\x20Upserted:\x20Vbeln=",
    "848aqwlkG",
    "commit",
    "274648teGhYs",
    "request",
    "531EgMFKU",
    "length",
    "Posnr",
    "Aubel",
    "❌\x20Transaction\x20failed:",
    "Spart",
    "15090eTtpXZ",
    "../config/db",
    "MonthD",
    "Bzirk",
    "Kursk",
    "Fktyp",
    "input",
    ",\x20Posnr=",
    "Matnr",
    "Decimal",
    "2579984LEJNwV",
    "Gjahr",
    "⚠️\x20No\x20Last\x20Month\x20Carry\x20data\x20to\x20process.",
    "109578RFVWGW",
    "exports",
    "query",
    "648WQBJaa",
    "No\x20data\x20provided\x20for\x20upsertion.",
    "❌\x20Error\x20processing\x20",
    "Kunnr",
    "26929ZuHwao",
    "warn",
    "Kwmeng",
    "665130OGKpON",
    "153RzpayZ",
    "Fkart",
    "Data\x20inserted/updated\x20successfully.",
    "begin",
    "\x0a\x20\x20MERGE\x20INTO\x20PRD_LastMonthCarry\x20AS\x20target\x0a\x20\x20USING\x20(SELECT\x20@Vbeln\x20AS\x20Vbeln,\x20@Posnr\x20AS\x20Posnr)\x20AS\x20source\x0a\x20\x20ON\x20target.Vbeln\x20=\x20source.Vbeln\x20AND\x20target.Posnr\x20=\x20source.Posnr\x0a\x20\x20WHEN\x20MATCHED\x20THEN\x0a\x20\x20\x20\x20UPDATE\x20SET\x0a\x20\x20\x20\x20\x20\x20Vtweg\x20=\x20@Vtweg,\x0a\x20\x20\x20\x20\x20\x20Spart\x20=\x20@Spart,\x0a\x20\x20\x20\x20\x20\x20Fkart\x20=\x20@Fkart,\x0a\x20\x20\x20\x20\x20\x20Fktyp\x20=\x20@Fktyp,\x0a\x20\x20\x20\x20\x20\x20Vkorg\x20=\x20@Vkorg,\x0a\x20\x20\x20\x20\x20\x20Waerk\x20=\x20@Waerk,\x0a\x20\x20\x20\x20\x20\x20Gjahr\x20=\x20@Gjahr,\x0a\x20\x20\x20\x20\x20\x20Aubel\x20=\x20@Aubel,\x0a\x20\x20\x20\x20\x20\x20Aupos\x20=\x20@Aupos,\x0a\x20\x20\x20\x20\x20\x20Netwr\x20=\x20@Netwr,\x0a\x20\x20\x20\x20\x20\x20Matnr\x20=\x20@Matnr,\x0a\x20\x20\x20\x20\x20\x20Fkimg\x20=\x20@Fkimg,\x0a\x20\x20\x20\x20\x20\x20Matkl\x20=\x20@Matkl,\x0a\x20\x20\x20\x20\x20\x20Kwmeng\x20=\x20@Kwmeng,\x0a\x20\x20\x20\x20\x20\x20PendingQty\x20=\x20@PendingQty,\x0a\x20\x20\x20\x20\x20\x20OdrVal\x20=\x20@OdrVal,\x0a\x20\x20\x20\x20\x20\x20Kunnr\x20=\x20@Kunnr,\x0a\x20\x20\x20\x20\x20\x20Kursk\x20=\x20@Kursk,\x0a\x20\x20\x20\x20\x20\x20Bzirk\x20=\x20@Bzirk,\x0a\x20\x20\x20\x20\x20\x20Zone\x20=\x20@Zone,\x0a\x20\x20\x20\x20\x20\x20MonthD\x20=\x20@MonthD\x0a\x20\x20WHEN\x20NOT\x20MATCHED\x20THEN\x0a\x20\x20\x20\x20INSERT\x20(\x0a\x20\x20\x20\x20\x20\x20Vbeln,\x20Posnr,\x20Vtweg,\x20Spart,\x20Fkart,\x20Fktyp,\x20Vkorg,\x20Waerk,\x0a\x20\x20\x20\x20\x20\x20Gjahr,\x20Aubel,\x20Aupos,\x20Netwr,\x20Matnr,\x20Fkimg,\x20Matkl,\x0a\x20\x20\x20\x20\x20\x20Kwmeng,\x20PendingQty,\x20OdrVal,\x20Kunnr,\x20Kursk,\x20Bzirk,\x20Zone,\x20MonthD\x0a\x20\x20\x20\x20)\x0a\x20\x20\x20\x20VALUES\x20(\x0a\x20\x20\x20\x20\x20\x20@Vbeln,\x20@Posnr,\x20@Vtweg,\x20@Spart,\x20@Fkart,\x20@Fktyp,\x20@Vkorg,\x20@Waerk,\x0a\x20\x20\x20\x20\x20\x20@Gjahr,\x20@Aubel,\x20@Aupos,\x20@Netwr,\x20@Matnr,\x20@Fkimg,\x20@Matkl,\x0a\x20\x20\x20\x20\x20\x20@Kwmeng,\x20@PendingQty,\x20@OdrVal,\x20@Kunnr,\x20@Kursk,\x20@Bzirk,\x20@Zone,\x20@MonthD\x0a\x20\x20\x20\x20);\x0a",
    "VarChar",
    "Waerk",
    "165hqSfUJ",
    "36BmxJtX",
    "Netwr",
    "error",
    "Matkl",
  ];
  a10_0x118d = function () {
    return _0x15e2c4;
  };
  return a10_0x118d();
}
function a10_0x5103(_0x2a7344, _0x3b802a) {
  const _0x118dc1 = a10_0x118d();
  return (
    (a10_0x5103 = function (_0x510310, _0x437ff3) {
      _0x510310 = _0x510310 - 0x15d;
      let _0x4654f0 = _0x118dc1[_0x510310];
      return _0x4654f0;
    }),
    a10_0x5103(_0x2a7344, _0x3b802a)
  );
}
(function (_0x4fe648, _0x379e5b) {
  const _0x4b6fbe = a10_0x5103,
    _0x3938f6 = _0x4fe648();
  while (!![]) {
    try {
      const _0x375c73 =
        (parseInt(_0x4b6fbe(0x167)) / 0x1) *
          (-parseInt(_0x4b6fbe(0x17d)) / 0x2) +
        -parseInt(_0x4b6fbe(0x184)) / 0x3 +
        -parseInt(_0x4b6fbe(0x165)) / 0x4 +
        (-parseInt(_0x4b6fbe(0x18c)) / 0x5) *
          (-parseInt(_0x4b6fbe(0x17a)) / 0x6) +
        (-parseInt(_0x4b6fbe(0x181)) / 0x7) *
          (parseInt(_0x4b6fbe(0x163)) / 0x8) +
        (-parseInt(_0x4b6fbe(0x185)) / 0x9) *
          (parseInt(_0x4b6fbe(0x16d)) / 0xa) +
        (-parseInt(_0x4b6fbe(0x177)) / 0xb) *
          (-parseInt(_0x4b6fbe(0x18d)) / 0xc);
      if (_0x375c73 === _0x379e5b) break;
      else _0x3938f6["push"](_0x3938f6["shift"]());
    } catch (_0x1524d1) {
      _0x3938f6["push"](_0x3938f6["shift"]());
    }
  }
})(a10_0x118d, 0x6435c);
const { sql, poolPromise } = require(a10_0x5e39d0(0x16e)),
  parseDecimal = (_0xed65a7) => {
    if (!_0xed65a7 || isNaN(_0xed65a7)) return 0x0;
    return parseFloat(_0xed65a7);
  },
  insertOrUpdateLastMonthCarry = async (_0x1d0252) => {
    const _0x1d862f = a10_0x5e39d0;
    if (!_0x1d0252 || _0x1d0252[_0x1d862f(0x168)] === 0x0)
      return (
        console[_0x1d862f(0x182)](_0x1d862f(0x179)),
        { success: ![], message: _0x1d862f(0x17e) }
      );
    try {
      const _0x33a1b4 = await poolPromise,
        _0x430ca6 = new sql[_0x1d862f(0x191)](_0x33a1b4);
      await _0x430ca6[_0x1d862f(0x188)]();
      for (const _0x4d2cd of _0x1d0252) {
        try {
          console["log"](
            _0x1d862f(0x15d),
            _0x4d2cd["Vbeln"],
            _0x4d2cd[_0x1d862f(0x169)]
          ),
            await _0x430ca6[_0x1d862f(0x166)]()
              [_0x1d862f(0x173)](
                "Vbeln",
                sql[_0x1d862f(0x18a)],
                _0x4d2cd[_0x1d862f(0x15e)]
              )
              ["input"](
                _0x1d862f(0x169),
                sql["VarChar"],
                _0x4d2cd[_0x1d862f(0x169)]
              )
              [_0x1d862f(0x173)](
                _0x1d862f(0x15f),
                sql[_0x1d862f(0x18a)],
                _0x4d2cd[_0x1d862f(0x15f)] || ""
              )
              [_0x1d862f(0x173)](
                _0x1d862f(0x16c),
                sql[_0x1d862f(0x18a)],
                _0x4d2cd["Spart"] || ""
              )
              [_0x1d862f(0x173)](
                _0x1d862f(0x186),
                sql[_0x1d862f(0x18a)],
                _0x4d2cd[_0x1d862f(0x186)] || ""
              )
              [_0x1d862f(0x173)](
                _0x1d862f(0x172),
                sql[_0x1d862f(0x18a)],
                _0x4d2cd[_0x1d862f(0x172)] || ""
              )
              [_0x1d862f(0x173)](
                _0x1d862f(0x161),
                sql[_0x1d862f(0x18a)],
                _0x4d2cd["Vkorg"] || ""
              )
              [_0x1d862f(0x173)](
                _0x1d862f(0x18b),
                sql[_0x1d862f(0x18a)],
                _0x4d2cd[_0x1d862f(0x18b)] || ""
              )
              [_0x1d862f(0x173)](
                _0x1d862f(0x178),
                sql[_0x1d862f(0x194)],
                parseInt(_0x4d2cd[_0x1d862f(0x178)]) || null
              )
              [_0x1d862f(0x173)](
                _0x1d862f(0x16a),
                sql[_0x1d862f(0x18a)],
                _0x4d2cd[_0x1d862f(0x16a)] || ""
              )
              [_0x1d862f(0x173)](
                _0x1d862f(0x160),
                sql[_0x1d862f(0x18a)],
                _0x4d2cd[_0x1d862f(0x160)] || ""
              )
              [_0x1d862f(0x173)](
                _0x1d862f(0x18e),
                sql["Decimal"](0x12, 0x2),
                parseDecimal(_0x4d2cd[_0x1d862f(0x18e)])
              )
              [_0x1d862f(0x173)](
                _0x1d862f(0x175),
                sql[_0x1d862f(0x18a)],
                _0x4d2cd["Matnr"] || ""
              )
              ["input"](
                _0x1d862f(0x193),
                sql[_0x1d862f(0x176)](0x12, 0x3),
                parseDecimal(_0x4d2cd[_0x1d862f(0x193)])
              )
              [_0x1d862f(0x173)](
                _0x1d862f(0x190),
                sql[_0x1d862f(0x18a)],
                _0x4d2cd[_0x1d862f(0x190)] || ""
              )
              [_0x1d862f(0x173)](
                _0x1d862f(0x183),
                sql[_0x1d862f(0x176)](0x12, 0x3),
                parseDecimal(_0x4d2cd[_0x1d862f(0x183)])
              )
              ["input"](
                _0x1d862f(0x195),
                sql["Decimal"](0x12, 0x3),
                parseDecimal(_0x4d2cd[_0x1d862f(0x195)])
              )
              [_0x1d862f(0x173)](
                _0x1d862f(0x192),
                sql[_0x1d862f(0x176)](0x12, 0x2),
                parseDecimal(_0x4d2cd[_0x1d862f(0x192)])
              )
              [_0x1d862f(0x173)](
                _0x1d862f(0x180),
                sql[_0x1d862f(0x18a)],
                _0x4d2cd[_0x1d862f(0x180)] || ""
              )
              ["input"](
                "Kursk",
                sql["Decimal"](0x12, 0x5),
                parseDecimal(_0x4d2cd[_0x1d862f(0x171)])
              )
              [_0x1d862f(0x173)](
                _0x1d862f(0x170),
                sql[_0x1d862f(0x18a)],
                _0x4d2cd[_0x1d862f(0x170)] || ""
              )
              ["input"]("Zone", sql["VarChar"], _0x4d2cd["Zone"] || "")
              [_0x1d862f(0x173)](
                _0x1d862f(0x16f),
                sql[_0x1d862f(0x18a)],
                _0x4d2cd[_0x1d862f(0x16f)] || ""
              )
              [_0x1d862f(0x17c)](_0x1d862f(0x189)),
            console[_0x1d862f(0x196)](
              _0x1d862f(0x162) +
                _0x4d2cd[_0x1d862f(0x15e)] +
                _0x1d862f(0x174) +
                _0x4d2cd["Posnr"]
            );
        } catch (_0x54592e) {
          console[_0x1d862f(0x18f)](
            _0x1d862f(0x17f) +
              _0x4d2cd[_0x1d862f(0x15e)] +
              "-" +
              _0x4d2cd[_0x1d862f(0x169)] +
              ":",
            _0x54592e["message"]
          );
        }
      }
      return (
        await _0x430ca6[_0x1d862f(0x164)](),
        console[_0x1d862f(0x196)](
          "✅\x20All\x20records\x20upserted\x20successfully."
        ),
        { success: !![], message: _0x1d862f(0x187) }
      );
    } catch (_0x47d3b6) {
      return (
        console[_0x1d862f(0x18f)](_0x1d862f(0x16b), _0x47d3b6),
        {
          success: ![],
          message: "Error\x20inserting/updating\x20data",
          error: _0x47d3b6,
        }
      );
    }
  };
module[a10_0x5e39d0(0x17b)] = {
  insertOrUpdateLastMonthCarry: insertOrUpdateLastMonthCarry,
};

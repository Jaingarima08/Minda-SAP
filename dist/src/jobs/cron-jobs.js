const a8_0x4561dc = a8_0x4cd2;
function a8_0x4cd2(_0x2866a9, _0x102df9) {
  const _0x1f8131 = a8_0x1f81();
  return (
    (a8_0x4cd2 = function (_0x4cd207, _0x2db662) {
      _0x4cd207 = _0x4cd207 - 0xae;
      let _0x47a52c = _0x1f8131[_0x4cd207];
      return _0x47a52c;
    }),
    a8_0x4cd2(_0x2866a9, _0x102df9)
  );
}
(function (_0x4353de, _0x2bd2eb) {
  const _0x186ad6 = a8_0x4cd2,
    _0x1733f5 = _0x4353de();
  while (!![]) {
    try {
      const _0x2af024 =
        (parseInt(_0x186ad6(0xae)) / 0x1) * (-parseInt(_0x186ad6(0xc2)) / 0x2) +
        parseInt(_0x186ad6(0xc4)) / 0x3 +
        parseInt(_0x186ad6(0xb5)) / 0x4 +
        (-parseInt(_0x186ad6(0xc3)) / 0x5) * (parseInt(_0x186ad6(0xb3)) / 0x6) +
        -parseInt(_0x186ad6(0xc0)) / 0x7 +
        -parseInt(_0x186ad6(0xaf)) / 0x8 +
        parseInt(_0x186ad6(0xb8)) / 0x9;
      if (_0x2af024 === _0x2bd2eb) break;
      else _0x1733f5["push"](_0x1733f5["shift"]());
    } catch (_0x50dcd0) {
      _0x1733f5["push"](_0x1733f5["shift"]());
    }
  }
})(a8_0x1f81, 0xd72dc);
const cron = require(a8_0x4561dc(0xbf)),
  { fetchAndStoregroups } = require("../controller/Matrl_grpController"),
  { fetchAndStoreCustomers } = require(a8_0x4561dc(0xb1)),
  { fetchAndStoreSalesOrders } = require(a8_0x4561dc(0xbd)),
  { fetchAndStoreSalesInvoices } = require(a8_0x4561dc(0xbe)),
  { fetchAndInsertSalesData } = require(a8_0x4561dc(0xc9)),
  {
    fetchAndStoreLastMonthCarry,
  } = require("../controller/Last_Month_CarryController"),
  delay = (_0x2e75e7) =>
    new Promise((_0x30c8b4) => setTimeout(_0x30c8b4, _0x2e75e7)),
  runSequentially = async () => {
    const _0x5dcc44 = a8_0x4561dc,
      _0x44e368 = [
        { name: "Sales\x20Data", fn: fetchAndStoregroups },
        { name: _0x5dcc44(0xba), fn: fetchAndStoreCustomers },
        { name: _0x5dcc44(0xb0), fn: fetchAndStoreSalesOrders },
        { name: _0x5dcc44(0xc1), fn: fetchAndStoreSalesInvoices },
        { name: _0x5dcc44(0xb2), fn: fetchAndInsertSalesData },
        { name: _0x5dcc44(0xc5), fn: fetchAndStoreLastMonthCarry },
      ];
    console["log"](_0x5dcc44(0xca));
    for (const { name: _0x2d9e85, fn: _0xbf24a4 } of _0x44e368) {
      console[_0x5dcc44(0xb9)](_0x5dcc44(0xcb) + _0x2d9e85 + _0x5dcc44(0xb6));
      try {
        await _0xbf24a4(),
          console[_0x5dcc44(0xb9)](_0x5dcc44(0xb7) + _0x2d9e85);
      } catch (_0x4c3415) {
        console[_0x5dcc44(0xb4)](_0x5dcc44(0xbb) + _0x2d9e85 + ":", _0x4c3415);
      }
      await delay(0x7d0);
    }
    console[_0x5dcc44(0xb9)](_0x5dcc44(0xc6));
  },
  scheduleTasks = () => {
    const _0x504ad8 = a8_0x4561dc;
    cron[_0x504ad8(0xbc)]("*/20\x20*\x20*\x20*\x20*", () => {
      const _0x428c4d = _0x504ad8;
      console[_0x428c4d(0xb9)](_0x428c4d(0xc7)), runSequentially();
    }),
      console[_0x504ad8(0xb9)](
        "✅\x20API\x20Sync\x20Scheduler\x20Initialized!"
      );
  };
module[a8_0x4561dc(0xc8)] = { scheduleTasks: scheduleTasks };
function a8_0x1f81() {
  const _0x137fef = [
    "3793170nYwinN",
    "Last\x20Month\x20Data",
    "✅\x20All\x20API\x20Data\x20Refreshed\x20Successfully!",
    "⏳\x20Scheduled\x20API\x20Sync\x20Started...",
    "exports",
    "../controller/tagetValueController",
    "✅\x20Starting\x20API\x20Data\x20Refresh...",
    "✅\x20Fetching\x20",
    "2DGlkJZ",
    "7234160DAlehH",
    "Sales\x20Order\x20Data",
    "../controller/customerController",
    "Taget\x20Values\x20Data",
    "12822SDiKzy",
    "error",
    "999700bBXbRR",
    "...",
    "✅\x20Successfully\x20inserted/updated\x20",
    "45212247rukdKN",
    "log",
    "Customer\x20Info\x20Data",
    "❌\x20Error\x20in\x20",
    "schedule",
    "../controller/salesOrderController",
    "../controller/salesInvoiceController",
    "node-cron",
    "11272947quVqZh",
    "Sales\x20Invoice\x20Data",
    "1652346nZaYGE",
    "3485GclOsC",
  ];
  a8_0x1f81 = function () {
    return _0x137fef;
  };
  return a8_0x1f81();
}

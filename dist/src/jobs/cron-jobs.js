const a8_0x472427 = a8_0x275d;
(function (_0x109256, _0x3d662c) {
  const _0x14ac4d = a8_0x275d,
    _0xc8239c = _0x109256();
  while (!![]) {
    try {
      const _0x5e895f =
        -parseInt(_0x14ac4d(0x1c9)) / 0x1 +
        parseInt(_0x14ac4d(0x1ce)) / 0x2 +
        parseInt(_0x14ac4d(0x1ca)) / 0x3 +
        parseInt(_0x14ac4d(0x1bb)) / 0x4 +
        -parseInt(_0x14ac4d(0x1c6)) / 0x5 +
        -parseInt(_0x14ac4d(0x1cb)) / 0x6 +
        (parseInt(_0x14ac4d(0x1c7)) / 0x7) *
          (-parseInt(_0x14ac4d(0x1b9)) / 0x8);
      if (_0x5e895f === _0x3d662c) break;
      else _0xc8239c["push"](_0xc8239c["shift"]());
    } catch (_0x1b8739) {
      _0xc8239c["push"](_0xc8239c["shift"]());
    }
  }
})(a8_0x323f, 0xb23a0);
const cron = require(a8_0x472427(0x1bd)),
  { fetchAndStoregroups } = require(a8_0x472427(0x1b6)),
  { fetchAndStoreCustomers } = require(a8_0x472427(0x1cc)),
  { fetchAndStoreSalesOrders } = require(a8_0x472427(0x1c5)),
  { fetchAndStoreSalesInvoices } = require(a8_0x472427(0x1b8)),
  { fetchAndInsertSalesData } = require(a8_0x472427(0x1c1)),
  { fetchAndStoreLastMonthCarry } = require(a8_0x472427(0x1cf)),
  delay = (_0x5e1949) =>
    new Promise((_0x9ec722) => setTimeout(_0x9ec722, _0x5e1949)),
  runSequentially = async () => {
    const _0x5102fb = a8_0x472427,
      _0x32a75c = [
        { name: "Sales\x20Data", fn: fetchAndStoregroups },
        { name: _0x5102fb(0x1c0), fn: fetchAndStoreCustomers },
        { name: _0x5102fb(0x1c8), fn: fetchAndStoreSalesOrders },
        { name: _0x5102fb(0x1be), fn: fetchAndStoreSalesInvoices },
        { name: _0x5102fb(0x1ba), fn: fetchAndInsertSalesData },
        { name: _0x5102fb(0x1bc), fn: fetchAndStoreLastMonthCarry },
      ];
    console[_0x5102fb(0x1c2)](_0x5102fb(0x1b7));
    for (const { name: _0x5edad2, fn: _0x198504 } of _0x32a75c) {
      console[_0x5102fb(0x1c2)](
        _0x5102fb(0x1c3) + _0x5edad2 + _0x5102fb(0x1d0)
      );
      try {
        await _0x198504(), console["log"](_0x5102fb(0x1cd) + _0x5edad2);
      } catch (_0x44493a) {
        console["error"](_0x5102fb(0x1b5) + _0x5edad2 + ":", _0x44493a);
      }
      await delay(0x7d0);
    }
    console[_0x5102fb(0x1c2)](_0x5102fb(0x1bf));
  },
  scheduleTasks = () => {
    const _0x25ce98 = a8_0x472427;
    cron["schedule"](_0x25ce98(0x1c4), () => {
      const _0x978b0 = _0x25ce98;
      console[_0x978b0(0x1c2)]("⏳\x20Scheduled\x20API\x20Sync\x20Started..."),
        runSequentially();
    }),
      console[_0x25ce98(0x1c2)](
        "✅\x20API\x20Sync\x20Scheduler\x20Initialized!"
      );
  };
module["exports"] = { scheduleTasks: scheduleTasks };
function a8_0x275d(_0x501999, _0x36ff1f) {
  const _0x323ff3 = a8_0x323f();
  return (
    (a8_0x275d = function (_0x275d80, _0x43fc46) {
      _0x275d80 = _0x275d80 - 0x1b5;
      let _0x267151 = _0x323ff3[_0x275d80];
      return _0x267151;
    }),
    a8_0x275d(_0x501999, _0x36ff1f)
  );
}
function a8_0x323f() {
  const _0x59d514 = [
    "688mIPySY",
    "Taget\x20Values\x20Data",
    "4738404XhasWu",
    "Last\x20Month\x20Data",
    "node-cron",
    "Sales\x20Invoice\x20Data",
    "✅\x20All\x20API\x20Data\x20Refreshed\x20Successfully!",
    "Customer\x20Info\x20Data",
    "../controller/tagetValueController",
    "log",
    "✅\x20Fetching\x20",
    "*/20\x20*\x20*\x20*\x20*",
    "../controller/salesOrderController",
    "6858885ZQgZrf",
    "107828NsBjHP",
    "Sales\x20Order\x20Data",
    "175060UTeJtc",
    "4303557gUGSGQ",
    "682212EQkqbW",
    "../controller/customerController",
    "✅\x20Successfully\x20inserted/updated\x20",
    "2192358WMudcy",
    "../controller/Last_Month_CarryController",
    "...",
    "❌\x20Error\x20in\x20",
    "../controller/Matrl_grpController",
    "✅\x20Starting\x20API\x20Data\x20Refresh...",
    "../controller/salesInvoiceController",
  ];
  a8_0x323f = function () {
    return _0x59d514;
  };
  return a8_0x323f();
}

const express = require("express");
const { scheduleTasks } = require("./jobs/cron-jobs");


// const Matrl_grpRoute = require("./routes/Matrl_grpRoute");
// const customerRoute = require("./routes/customerRoute");
// const salesOrderRoute = require("./routes/salesOrderRoute");
// const salesInvoiceRoute = require("./routes/salesInvoiceRoute");
// const tagetValuesRoute = require("./routes/tagetValueRoute");


const app = express();
app.use(express.json());

scheduleTasks();

// app.use("/api", Matrl_grpRoute);
// app.use("/api", customerRoute);
// app.use("/api", salesOrderRoute);
// app.use("/api", salesInvoiceRoute);
// app.use("/api", tagetValuesRoute);


module.exports = app;






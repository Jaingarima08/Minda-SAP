const express = require("express");
const { scheduleTasks } = require("./jobs/cron-jobs");
const cors = require('cors');


// const Matrl_grpRoute = require("./routes/Matrl_grpRoute");
// const customerRoute = require("./routes/customerRoute");
// const salesOrderRoute = require("./routes/salesOrderRoute");
// const salesInvoiceRoute = require("./routes/salesInvoiceRoute");
// const tagetValuesRoute = require("./routes/tagetValueRoute");
// const lastMonthCarryRoute = require("./routes/Last_Month_CarryRoute");
const filterOptionRoute = require("./routes/KPICards/filterOptionRoute");
const KPIRoute = require("./routes/KPICards/KPIRoute");

// const totalBudgetRoute = require("./routes/KPICards/totalBudgetRoute");
// const plannedOrderRoute = require("./routes/KPICards/plannedOrderRoute");
// const actualOrderRoute = require("./routes/KPICards/actualOrderRoute");

const app = express();
app.use(express.json());

// Add this before your routes
app.use(cors({
  origin: 'http://localhost:5173', // Allow your React app's origin
  methods: ['GET', 'POST'],
  credentials: true
}));

// scheduleTasks();

// app.use("/api", Matrl_grpRoute);
// app.use("/api", customerRoute);
// app.use("/api", salesOrderRoute);
// app.use("/api", salesInvoiceRoute);
// app.use("/api", tagetValuesRoute);
// app.use("/api", lastMonthCarryRoute);
app.use('/api', filterOptionRoute);
app.use('/api', KPIRoute);
// app.use('/api', totalBudgetRoute);
// app.use('/api', plannedOrderRoute);
// app.use('/api', actualOrderRoute);

module.exports = app;






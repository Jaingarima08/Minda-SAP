// routes/kpis.js
const express = require('express');
const router = express.Router();
const KPIModel = require('../../models/KPICards/KPIModel');

router.get('/kpis', async (req, res) => {
  try {
    const filters = {
      zone: req.query.zone || 'All',
      month: req.query.month || 'All',
      year: req.query.year || 'All'
    };

    const result = await KPIModel.getKPIs(filters);

    if (result.success) {
      const raw = result.data;

      const response = {
        totalBudget: raw.TotalBudget || 0,
        plannedOrder: raw.PlannedOrder || 0,
        actualOrder: raw.ActualOrder || 0,
        actualInvoice: raw.ActualInvoice || 0,
        execution: raw.Execution || 0,
        orderAchievement: raw.OrderAchievement || 0,
      };

      res.json(response);
    } else {
      res.status(500).json({ message: result.message });
    }
  } catch (error) {
    console.error("❌ Error in /api/kpis route:", error);
    res.status(500).json({ message: "Server error", error });
  }
});


module.exports = router;

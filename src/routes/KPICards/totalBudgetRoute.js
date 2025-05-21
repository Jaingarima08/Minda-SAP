const express = require('express');
const router = express.Router();
const totalBudgetModel = require('../../models/KPICards/totalBudgetModel');

// GET /api/kpis/total-budget?zone=South&month=May&year=2025
router.get('/total-budget', async (req, res) => {
  const { zone, month, year } = req.query;

  const result = await totalBudgetModel.getTotalBudget({ zone, month, year });

  if (result.success) {
    res.json({ totalBudget: result.totalBudget });
  } else {
    res.status(500).json({ message: result.message });
  }
});

module.exports = router;

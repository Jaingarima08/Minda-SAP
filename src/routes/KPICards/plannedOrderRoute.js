const express = require('express');
const PlannedOrderModel = require('../../models/KPICards/plannedOrderModel');
const router = express.Router();

router.get('/planned-order', async (req, res) => {
  const result = await PlannedOrderModel.getPlannedOrder();
  if (result.success) {
    res.json({ plannedOrder: result.plannedOrder });
  } else {
    res.status(500).json({ message: result.message });
  }
});

module.exports = router;

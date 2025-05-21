const express = require('express');
const router = express.Router();
const actualOrderModel = require('../../models/KPICards/actualOrderModel');

router.get('/actual-order', async (req, res) => {
    const result = await actualOrderModel.getActualOrder();
    if (result.success) {
        res.json({ actualOrder: result.actualOrder });
    } else {
        res.status(500).json({ message: result.message });
    }
});

module.exports = router;
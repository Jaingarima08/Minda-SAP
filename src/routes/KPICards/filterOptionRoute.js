
const express = require('express');
const router = express.Router();

router.get('/filter-options', (req, res) => {
  res.json({
    zones: ['East', 'West', 'North', 'South', 'Export'],
    months: ['January', 'February', 'March', 'April', 'May', 'June'],
    years: [ '2025', '2026']
  });
});

module.exports = router;

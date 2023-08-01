var express = require('express');
var router = express.Router();
const rows = {services: ['soil formation', 'Primary production', 'Nutrient cycling',
'Water recycling', 'provision of habitat']}

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send(rows);
});

module.exports = router;

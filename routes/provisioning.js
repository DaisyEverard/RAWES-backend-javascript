var express = require('express');
var router = express.Router();
const rows = {services: ['Provision of fresh water', 'Provision of food',
'Provision of fibre', 'Provision of fuel', 'Provision of genetic resources',
'Provision of natural medicines and pharmaceuticals', 'Provision of ornamental resources',
'Clay, mineral, aggregate harvesting', 'Waste disposal', 
'Energy harvesting from natural air and water flows']}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(rows);
});

module.exports = router;

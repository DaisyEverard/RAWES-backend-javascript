var express = require('express');
var router = express.Router();
const rows = {services: ['Air quality regulation', 'Local climate regulation',
'Global climate regulation', 'Water regulation', 'Flood hazard regulation',
'Storm hazard regulation', 'Pest regulation', 'Regulation of human diseases',
'Regulation of diseases affecting livestock', 'Erosion regulation', 'Water purification',
'Pollination', 'Salinity regulation', 'Fire regulation', 'Noise and visual buffering']}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(rows);
});

module.exports = router;

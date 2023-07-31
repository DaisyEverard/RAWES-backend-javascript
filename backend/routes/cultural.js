var express = require('express');
var router = express.Router();
const rows = {services: ['Cultural heritage', 'Recreation and tourism', 'Aesthetic value',
'Spritual and religious value', 'Insipiration value', 'Social relations', 
'Education and research'
]}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(rows);
});

module.exports = router;

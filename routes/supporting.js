var express = require('express');
const {selectAllFromTable} = require('../api'); 
var router = express.Router();

/* GET users listing. */
router.get('/', function(request, response, next) {
  const table = 'supporting_setup';
  selectAllFromTable(table)
  .then((result) => { response.send(result); })
  .catch((err) => {response.send(err); })
});

module.exports = router;


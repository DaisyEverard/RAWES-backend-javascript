var express = require('express');
const {selectAllFromTable} = require('../api'); 
var router = express.Router();

/* GET users listing. */
router.get('/', function(request, response, next) {
  const table = 'provisioning_setup';
  selectAllFromTable(table)
  .then((result) => { response.send(result); })
  .catch((err) => {response.send(err); })
});

module.exports = router;

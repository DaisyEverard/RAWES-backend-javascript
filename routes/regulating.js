var express = require('express');
const checkAPI = require('../api'); 
var router = express.Router();

/* GET users listing. */
router.get('/', function(request, response, next) {
  const table = 'regulating_setup';
  checkAPI.checkAPI(table)
  .then((result) => { response.send(result); })
  .catch((err) => {response.send(err); })
});

module.exports = router;

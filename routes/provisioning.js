var express = require('express');
const checkAPI = require('../api'); 
var router = express.Router();

router.get('/', function(request, response, next) {
  const table = 'provisioning_setup';
  checkAPI.checkAPI(table)
  .then((result) => { response.send(result); })
  .catch((err) => {response.send(err); })
});

module.exports = router;

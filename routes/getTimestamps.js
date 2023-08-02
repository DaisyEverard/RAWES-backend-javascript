var express = require('express');
const {getAllTimestamps} = require('../api'); 
var router = express.Router();

/* GET users listing. */
router.get('/', function(request, response, next) {
  getAllTimestamps()
  .then((result) => { response.send(result); })
  .catch((err) => {response.send(err); })
});

module.exports = router;

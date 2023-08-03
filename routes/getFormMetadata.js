var express = require('express');
const {getFormMetadata} = require('../api'); 
var router = express.Router();

/* GET users listing. */
router.get('/', function(request, response, next) {
  getFormMetadata()
  .then((result) => { response.send(result); })
  .catch((err) => {response.send(err); })
});

module.exports = router;

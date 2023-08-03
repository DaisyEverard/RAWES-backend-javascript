var express = require('express');
const {getFormMetadata, sendQueryToDB} = require('../api'); 
var router = express.Router();

/* GET users listing. */
router.get('/', function(request, response, next) {
  const query = `SELECT * FROM form_metadata`;
  sendQueryToDB(query)
  .then((result) => { response.send(result); })
  .catch((err) => {response.send(err); })
});

module.exports = router;

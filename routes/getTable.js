var express = require('express');
const {getTemplateRows} = require('../api'); 
var router = express.Router();

/* GET users listing. */
router.get('/:serviceType', function(request, response, next) {
  const table = request.params.serviceType;
  getTemplateRows(table)
  .then((result) => { response.send(result); })
  .catch((err) => {response.send(err); })
});

module.exports = router;

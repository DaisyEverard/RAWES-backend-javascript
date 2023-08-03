var express = require('express');
const { sendQueryToDB } = require('../api');
var router = express.Router();

/* GET users listing. */
router.get('/:serviceType', function(request, response, next) {
  const table = request.params.serviceType;
  const query = `SELECT * FROM template_services WHERE service_type='${table}'`;
  sendQueryToDB(query)
  .then((result) => { response.send(result); })
  .catch((err) => {response.send(err); })
});

module.exports = router;

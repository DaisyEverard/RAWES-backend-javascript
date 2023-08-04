var express = require('express');
const { sendQueryToDB } = require('../database'); 
var router = express.Router();

/* GET users listing. */
router.get('/', function(request, response, next) {
    const timestamp = request.query.timestamp;
    if (!timestamp) {
        return response.status(400).send("Timestamp missing"); 
    }
    const query = `SELECT * FROM form_history WHERE timestamp='${timestamp}'`;
   sendQueryToDB(query)
  .then((result) => { response.send(result); })
  .catch((err) => {response.send(err); })
});

module.exports = router;


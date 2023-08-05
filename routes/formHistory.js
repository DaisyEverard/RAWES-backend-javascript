var express = require('express');
const { sendQueryToDB } = require('../database'); 
var router = express.Router();

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

router.put('/', (request, response) => {
    const timestamp = request.body.timestamp; 
    const serviceType = request.body.serviceType;
    const name = request.body.name;
    const value = request.body.value; 
    const query = `INSERT INTO form_history VALUES ('${timestamp}', 
    '${serviceType}', '${name}', ${value});`;

    sendQueryToDB(query)
    .then((result) => {response.send(result); })
    .catch((err) => {response.send(err); })
})
router.delete('/', (request, response) => {
    const timestamp = request.body.timestamp;
    const query = `DELETE FROM form_history WHERE timestamp='${timestamp}';
    DELETE FROM form_metadata WHERE timestamp='${timestamp}'`;
    sendQueryToDB(query)
    .then((result) => {response.send(result); })
    .catch((err) => {response.send(err); })
})

module.exports = router;


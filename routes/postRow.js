var express = require('express');
const { sendQueryToDB } = require('../database'); 
var router = express.Router();

router.post('/', (request, response) => {
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

module.exports = router;

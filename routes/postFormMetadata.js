var express = require('express');
const { sendQueryToDB } = require('../database'); 
var router = express.Router();

router.put('/', (request, response) => {
    const timestamp = request.body.timestamp;
    const assessor = request.body.assessor;
    const location = request.body.location; 
    const query = `INSERT INTO form_metadata (timestamp, assessor, location)
     VALUES ('${timestamp}', '${assessor}', '${location}')`;

    sendQueryToDB(query)
    .then((result) => {response.send(result); })
    .catch((err) => {response.send(err); })
})

module.exports = router;

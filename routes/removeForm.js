var express = require('express');
const { sendQueryToDB } = require('../api');
var router = express.Router();

router.delete('/', (request, response) => {
    const timestamp = request.body.timestamp;
    const query = `DELETE FROM form_history WHERE timestamp='${timestamp}';
    DELETE FROM form_metadata WHERE timestamp='${timestamp}'`;
    sendQueryToDB(query)
    .then((result) => {response.send(result); })
    .catch((err) => {response.send(err); })
})

module.exports = router;

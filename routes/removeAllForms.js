var express = require('express');
const { sendQueryToDB } = require('../database'); 
var router = express.Router();

router.delete('/', (request, response) => {
    const query = `DELETE FROM form_history;
    DELETE FROM form_metadata`;
    sendQueryToDB(query)
    .then((result) => {response.send(result); })
    .catch((err) => {response.send(err); })
})

module.exports = router;

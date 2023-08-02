var express = require('express');
const { postNewRow } = require('../api');
var router = express.Router();

router.post('/', (request, response) => {
    postNewRow(request.body)
    .then((result) => {response.send(result); })
    .catch((err) => {response.send(err); })
})

module.exports = router;

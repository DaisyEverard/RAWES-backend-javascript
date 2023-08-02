var express = require('express');
const { postFormRow } = require('../api');
var router = express.Router();

router.post('/', (request, response) => {
    postFormRow(request.body)
    .then((result) => {response.send(result); })
    .catch((err) => {response.send(err); })
})

module.exports = router;

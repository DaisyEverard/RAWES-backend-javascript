var express = require('express');
const { postFormMetadata } = require('../api');
var router = express.Router();

router.post('/', (request, response) => {
    postFormMetadata(request.body)
    .then((result) => {response.send(result); })
    .catch((err) => {response.send(err); })
})

module.exports = router;

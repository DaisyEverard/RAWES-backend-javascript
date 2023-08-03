var express = require('express');
const { removeAllForms } = require('../api');
var router = express.Router();

router.post('/', (request, response) => {
    removeAllForms()
    .then((result) => {response.send(result); })
    .catch((err) => {response.send(err); })
})

module.exports = router;

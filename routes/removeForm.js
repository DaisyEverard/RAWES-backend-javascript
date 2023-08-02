var express = require('express');
const { removeForm } = require('../api');
var router = express.Router();

router.post('/', (request, response) => {
    console.log(request.body); 
    removeForm(request.body.timestamp)
    .then((result) => {response.send(result); })
    .catch((err) => {response.send(err); })
})

module.exports = router;

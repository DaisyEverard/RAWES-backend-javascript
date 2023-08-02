var express = require('express');
const { postNewRow } = require('../api');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(request, response, next) {
//     let timestamp = request.query.timestamp;
//     if (!timestamp) {
//         return response.status(400).send("Timestamp missing"); 
//     }
//    getDataByTimestamp(timestamp)
//   .then((result) => { response.send(result); })
//   .catch((err) => {response.send(err); })
// });
router.post('/', (request, response) => {
    postNewRow(request.body)
    .then((result) => {response.send(result); })
    .catch((err) => {response.send(err); })
})

module.exports = router;

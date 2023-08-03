const dbConnect = require('./database');
const client = dbConnect.myConnection;

const sendQueryToDB = (query) => {
     return new Promise(function (resolve, reject) {
        client.query(query, (err, result) => {
            if (err) {
                return reject(err);
            } else {
                return resolve(result);
            }
        })
    })
}

module.exports = {
    sendQueryToDB
}
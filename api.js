const dbConnect = require('./database');
const client = dbConnect.myConnection;
const ser = (table) => {
    const query = `SELECT * FROM ${table}`;
    
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
module.exports.checkAPI = ser; 
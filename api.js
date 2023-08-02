const dbConnect = require('./database');
const client = dbConnect.myConnection;
const selectAllFromTable = (table) => {
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
const getDataByTimestamp = (timestamp) => {
    const query = `SELECT * FROM form_history WHERE timestamp='${timestamp}'`;
    
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
const postNewRow = (data) => {
    const query = `INSERT INTO form_history VALUES ('${data.timestamp}', '${data.serviceType}', '${data.name}', ${data.value})`;

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
const removeForm = (timestamp) => {
    const query = `DELETE FROM form_history WHERE timestamp='${timestamp}'`;
console.log(query);

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
    selectAllFromTable,
    getDataByTimestamp,
    postNewRow,
    removeForm
}
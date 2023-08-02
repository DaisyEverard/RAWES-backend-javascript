const dbConnect = require('./database');
const client = dbConnect.myConnection;
const getTemplateRows = (service) => {
    const query = `SELECT * FROM template_services WHERE service_type='${service}'`;
    
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
const postFormRow = (data) => {
    const query = `INSERT INTO form_history VALUES ('${data.timestamp}', '${data.serviceType}', '${data.name}', ${data.value});
    INSERT INTO all_timestamps (timestamp) VALUES ('${data.timestamp}')`;

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
    const query = `DELETE FROM form_history WHERE timestamp='${timestamp}';
    DELETE FROM all_timestamps WHERE timestamp='${timestamp}'`;
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
const getAllTimestamps = () => {
    const query = `SELECT * FROM all_timestamps`;
    
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
    getTemplateRows,
    getDataByTimestamp,
    postFormRow,
    removeForm,
    getAllTimestamps
}
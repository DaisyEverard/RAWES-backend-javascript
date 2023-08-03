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
    const query = `INSERT INTO form_history VALUES ('${data.timestamp}', '${data.serviceType}', '${data.name}', ${data.value});`;

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
    DELETE FROM form_metadata WHERE timestamp='${timestamp}'`;

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
const removeAllForms = () => {
    const query = `DELETE FROM form_history;
    DELETE FROM form_metadata`;

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
const getFormMetadata = () => {
    const query = `SELECT * FROM form_metadata`;
    
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
const postFormMetadata = (data) => {
    const query = `INSERT INTO form_metadata (timestamp, assessor, location) VALUES ('${data.timestamp}', '${data.assessor}', '${data.location}')`;

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
    removeAllForms,
    getFormMetadata,
    postFormMetadata
}
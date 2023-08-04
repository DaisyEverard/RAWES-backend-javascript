const {Client} = require('pg');
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "postgres", 
    database: "rawes_db"
}
)
client.connect();
module.exports.myConnection = client; 

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
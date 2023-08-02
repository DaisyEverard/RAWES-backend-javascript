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
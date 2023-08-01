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
client.query(`SELECT * FROM cultural_setup`, (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.error(err.message); 
    }
    client.end; 
})
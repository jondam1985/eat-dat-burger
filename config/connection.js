const mysql = require("mysql");

//Establishes connection with database
const connection = mysql.createConnection({
    user: "bv5xpxc8xf47s4k5",
    password: "xlautyxobi5412ox",
    port: 3306,
    host: "s0znzigqvfehvff5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    database: "a1udvn5av9teiej2",
    multipleStatements: true
});

connection.connect(function(err,){
    if (err) throw err;
    console.log (`Connected as id ${connection.threadId}`);
})

module.exports = connection;
const mysql = require("mysql");

//Establishes connection with database
const connection = mysql.createConnection({
    user: "root",
    password: "",
    port: 3306,
    host: "localhost",
    database: "burgers_db",
    multipleStatements: true
});

connection.connect(function(err,){
    if (err) throw err;
    console.log (`Connected as id ${connection.threadId}`);
})

module.exports = connection;
const express = require("express");
const handle = require("express-handlebars");
const connection = require("./config/connection");
const parser = require("body-parser");

const PORT = process.env.PORT || 3000;

const app = express();

//Sets handeblars as the main engine and main as the default layout
app.engine("handlebars", handle({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Used to parse the request body and encoded url requests
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Serve static content from public folder
app.use(express.static(__dirname + "/public"));

//Serves html with content from the burger table. Non devoured and Devoured entries
app.get("/", function(req, res) {
    connection.query(`select * from burger where devoured = false; select * from burger where devoured = true`, function(err, results) {
        if (err) throw err;
        res.render("index", { noDevoured: results[0], devoured: results[1] });
    });
})

//Creates a new entry in the database when users enter a new burger and hit the submit button
app.post("/api/newburger", function(req, res) {
    let burger = req.body.burger;
    //console.log(`This is the request body: ${burger}`);
    connection.query(`insert into burger (name) values ('${burger}')`, function(err, result) {
        if (err) throw err;
    })
    res.send(console.log(`New burger: ${burger} added to the database`));
})

//Updates a single burger record DEVOURED state from FALSE to TRUE
app.post("/api/devoured/:id", function(req, res) {
    let id = req.params.id;
    connection.query(`update burger set devoured = true where id = ${id}`, function(err, result) {
        if (err) throw err;
    })
    res.send(console.log(`Burger devoured, ID: ${id}`));
})

//Sets server to listed to port 3000 or port assigned by Heroku
app.listen(PORT, function() {
    console.log(`Listening to port: ${PORT}`);
})
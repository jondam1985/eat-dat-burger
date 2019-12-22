const express = require("express");
const burger = require("../models/burger");
const orm = require("../config/orm");

const route = express.Router();

//Listens to GET requests
route.get("/", function (req, res) {
    burger.nonDevoured(function(data) {
        var burgerObj = {
            devoured: data
        }
        res.render("index", burgerObj);
    });
})

module.exports = route;
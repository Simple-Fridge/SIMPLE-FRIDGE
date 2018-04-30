var express = require("express");

var router = express.Router();

// Import the model (food.js) to use its database functions.
var food = require("../models/food.js");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    res.render("index");
});

//ABOUT page

router.get("/about", function(req, res) {
    res.render("about");
});

//DONATE page

router.get("/charity", function(req, res) {
    res.render("charity");
});

//HOW TO page

router.get("/howto", function(req, res) {
    res.render("howto");
});

//BMI page

router.get("/bmi", function(req, res) {
    res.render("bmi");
});


module.exports = router;

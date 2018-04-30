var express = require("express");

var router = express.Router();

// Import the model (food.js) to use its database functions.
var food = require("../models/food.js");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    res.render("index");
});


module.exports = router;

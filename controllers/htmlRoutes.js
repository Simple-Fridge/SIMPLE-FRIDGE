var express = require("express");

var router = express.Router();

// Import the model (food.js) to use its database functions.
var food = require("../models/food.js");

var usdaApi = require("./usdaApi.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    console.log(req.query)
    var foodName = req.query.food;
    var hbsObject = {}
    if (foodName) {
        console.log(foodName)
        return usdaApi.findNutrientsByFoodName(foodName, function (data) {
            hbsObject = { food: data, name: foodName }
            res.render("index", hbsObject);
        });
    }
    return res.render("index", hbsObject);
});
window.location.replace("?=" + food +"")
    module.exports = router;
// get value out of text box
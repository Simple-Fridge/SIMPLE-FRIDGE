var express = require("express");

var router = express.Router();

// Import the model (food.js) to use its database functions.
var db = require("../models");

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
// window.location.replace("?=" + food +"")
module.exports = router;
// get value out of text box

//ABOUT page

router.get("/about", function (req, res) {
    res.render("about");
});

//DONATE page

router.get("/charity", function (req, res) {
    res.render("charity");
});

//HOW TO page

router.get("/howto", function (req, res) {
    res.render("howto");
});

//BMI page

router.get("/bmi", function (req, res) {
    res.render("bmi");
});

router.post("/savedfood", function (req, res) {
    console.log(req.body)
    // for (var j = 0; j < 6; j++) {
    //     // var cell = row.insertCell(i+j);
    //     jqStringCurr = jqString + (j + 1).toString();
    //     $(jqStringCurr).html(data[j].formattedName);
    // }
    db.Food.create({
        name: req.body.foodName,

        Protein: req.body.nutraList[0].formattedName,

        TotalLipidFat: req.body.nutraList[1].formattedName,

        CarbohydrateByDifference: req.body.nutraList[2].formattedName,

        FiberTotalDietary: req.body.nutraList[3].formattedName,

        SugarsTotal: req.body.nutraList[4].formattedName,

        Cholesterol: req.body.nutraList[5].formattedName,


    }).then(function (dbFood) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(dbFood);
    })
        .catch(function (err) {
            // Whenever a validation or flag fails, an error is thrown
            // We can "catch" the error to prevent it from being "thrown", which could crash our node app
            res.json(err);
        })
    });

    module.exports = router;

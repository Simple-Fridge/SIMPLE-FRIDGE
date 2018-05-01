var express = require("express");

var router = express.Router();

var usdaApi = require("./usdaApi.js");


router.get("/api/foodSearch/:food", function(req, res) {
    // get the food data
    // from the params passed 
    // from the url
    
    var foodName = req.params.food;
    usdaApi.findNutrientsByFoodName(foodName, function(data){
        res.json(data);

        //res.render("food", {food: data, name: foodName});

    });
});


module.exports = router;
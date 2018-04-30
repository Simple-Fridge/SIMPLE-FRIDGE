module.exports = function (sequelize, DataTypes) {
    var Food = sequelize.define("Food", {
        name: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.STRING
        },
        Protein: {
            type: DataTypes.INTEGER
        },
        TotalLipidFat: {
            type: DataTypes.INTEGER
        },
        CarbohydrateByDifference: {
            type: DataTypes.INTEGER
        },
        FiberTotalDietary: {
            type: DataTypes.INTEGER
        },
        SugarsTotal: {
            type: DataTypes.INTEGER
        },
        Cholesterol: {
            type: DataTypes.INTEGER
        },
        Value: {
            type: DataTypes.STRING
        }

    });




    return Food;
};

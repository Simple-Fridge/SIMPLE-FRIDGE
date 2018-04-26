module.exports = function(sequelize, DataTypes) {
    var Food = sequelize.define("Food", {
     name: {
         type: DataTypes.STRING 
     },
     category: {
         type: DataTypes.STRING
     }
    });
  
    

  
    return Food;
  };
  
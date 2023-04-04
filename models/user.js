const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                len: [3, 30],
              },
        },
        username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
       
      },
      pssword:{type:DataTypes.STRING,
    allowNull:false,
validate:length[6]},
    
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    });

    return User;
}   
module.exports = user;
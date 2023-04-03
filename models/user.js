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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
       
      },
    });

    return User;
}
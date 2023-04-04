const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class post extends Model {}

post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      defaultValue:DataTypes.NOW
    },
   user: {
    type:DataTypes.STRING,
    allowNull:false,
    references:{model:user, key:'id'}
   }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);
user.hasMany(post);
post.belongsTo(user)

module.exports = post;

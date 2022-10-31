const {Model,DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class likes extends Model { }

likes.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  postid: {
    type: DataTypes.INTEGER,
    references: {
      model: "post",
      key: "id",
    },
    onUpdate: "cascade",
    onDelete: "cascade",
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "User",
      key: "id",
    },
    onUpdate: "cascade",
    onDelete: "cascade",
  },
  like: {
    type: DataTypes.BOOLEAN
  },
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'likes',
});

module.exports = likes;
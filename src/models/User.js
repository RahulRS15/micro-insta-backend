const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  mobileNumber: {
    type: DataTypes.BIGINT,
    unique: true,
    allowNull: false,
  },
  address: {
    type: DataTypes.TEXT,
  },
  postCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = User;

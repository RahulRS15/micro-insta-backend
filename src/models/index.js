const sequelize = require('../config/database');
const User = require('./User');
const Post = require('./Post');

module.exports = { sequelize, User, Post };

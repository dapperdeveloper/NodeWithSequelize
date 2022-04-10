const { Sequelize, DataTypes } = require('sequelize');
const DB = require('../config/DB')

const User = DB.define('User', {
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate:{
      isEmail: true,
    }
  },
  address: {
    type: DataTypes.STRING
  },
  mobile: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
});

module.exports = User

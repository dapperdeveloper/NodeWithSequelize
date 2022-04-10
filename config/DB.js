const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodejs", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize

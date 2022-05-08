const Sequelize = require("sequelize");

const db = new Sequelize(process.env.DATABASE_URL, {
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  logging: false,
});

module.exports = db;

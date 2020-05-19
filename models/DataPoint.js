const Sequelize = require("sequelize");
const { sequelize } = require("../db.config");

const DataPoint = sequelize.define("DataPoint", {}, {});

module.exports = { DataPoint };

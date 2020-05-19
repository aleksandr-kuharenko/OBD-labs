const { sequelize } = require("../db.config");

const DataPointDimention = sequelize.define('DataPointDimention')

module.exports = { DataPointDimention };

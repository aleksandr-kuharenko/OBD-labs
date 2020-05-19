const Sequelize = require("sequelize");
const { sequelize } = require("../db.config");

const Indicator = sequelize.define(
  "Indicator",
  {
    value: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {}
);

module.exports = { Indicator };

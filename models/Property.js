const Sequelize = require("sequelize");
const { sequelize } = require("../db.config");

const Property = sequelize.define(
  "Property",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
    },
    info: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.DATE,
    },
  },
  {}
);

module.exports = { Property };

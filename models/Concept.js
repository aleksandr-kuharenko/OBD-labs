const Sequelize = require("sequelize");
const { sequelize } = require("../db.config");

const Concept = sequelize.define(
  "Concept",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {}
);

module.exports = { Concept };

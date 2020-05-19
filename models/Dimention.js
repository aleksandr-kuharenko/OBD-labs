const Sequelize = require("sequelize");
const { sequelize } = require("../db.config");

const Dimention = sequelize.define(
  "Dimention",
  {
    key: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {}
);

module.exports = { Dimention };

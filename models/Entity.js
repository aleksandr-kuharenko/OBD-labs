const Sequelize = require("sequelize");
const { sequelize } = require("../db.config");

const Entity = sequelize.define(
  "Entity",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {}
);

module.exports = { Entity };

const Sequelize = require("sequelize");
const { sequelize } = require("../db.config");

const EntityProperty = sequelize.define(
  "EntityProperty",
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

module.exports = { EntityProperty };

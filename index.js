const models = require("./models");
const { sequelize } = require("./db.config");
const { runSeed } = require("./seed");

sequelize
  .sync()
  .then(() => {
    console.log("Models are synced successfully");
  });

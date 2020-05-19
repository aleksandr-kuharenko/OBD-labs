const models = require("./models");
const { sequelize } = require("./db.config");

sequelize.sync().then(() => {
  console.log("Models are synced successfully");
});

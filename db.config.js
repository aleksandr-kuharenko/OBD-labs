const Sequelize = require('sequelize');

const sequelize = new Sequelize('obd', 'obd_db_user', '123456789', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = { sequelize };
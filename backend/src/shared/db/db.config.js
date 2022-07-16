const Sequelize = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/database/db.sqlite',
  //logging: false
})

module.exports = sequelize
async function loadDB() {
  const database = require('./db.config')

  const Client = require('../models/client')

  await database.sync()
}

loadDB()
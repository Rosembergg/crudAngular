import { database } from '../db/db.config.js'

import { client } from '../models/client.js'

async function loadDB() {
  await database.sync()
}

loadDB()
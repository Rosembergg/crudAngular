import express, { urlencoded, json } from 'express' 
import cors from 'cors'

import { routes } from './routes/index.js'

import './shared/db/loadDB.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(urlencoded({ extended: true }))
app.use(json())
app.use(cors({ origin: '*' }))

app.use(routes)


app.listen(PORT, () => {
  console.log(`Estou rodando na porta ${PORT}`);
})
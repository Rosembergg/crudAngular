const express = require('express')
const cors = require('cors')

const routes = require('./routes/index')

require('./shared/db/loadDB')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({ origin: '*' }))

app.use(routes)


app.listen(PORT, () => {
  console.log(`Estou rodando na porta ${PORT}`);
})
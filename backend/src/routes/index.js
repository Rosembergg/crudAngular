const { Router } = require('express');

const productsRouter = require('./client.routes')

const Routes = Router()

Routes.use('/products', productsRouter)

module.exports = Routes

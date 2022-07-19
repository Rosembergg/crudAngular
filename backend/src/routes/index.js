import { Router } from 'express'

import { clientRouter } from './client.routes.js'

export const routes = Router()

routes.use('/products', clientRouter)

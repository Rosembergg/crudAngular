import { Router } from 'express'

import { clientRouter } from './client.routes.js'
import { utilsRouter } from './utils.routes.js'

export const routes = Router()

routes.use('/products', clientRouter)
routes.use('/utils', utilsRouter)

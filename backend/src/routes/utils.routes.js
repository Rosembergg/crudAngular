import { Router } from 'express'

import { SearchAddressZipCodeController } from '../controllers/Address/SearchAddressZipCodeController.js'

export const utilsRouter = Router()

const searchAddressZipCodeController = new SearchAddressZipCodeController()

utilsRouter.get('/zipcode/:zipcode', searchAddressZipCodeController.handle)


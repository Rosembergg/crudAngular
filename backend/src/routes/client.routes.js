import { Router } from 'express'

import { CreateClientController } from '../controllers/Client/CreateClientController.js'
import { SearchAllClientController } from '../controllers/Client/SearchAllClientController.js'
import { FindClientController } from '../controllers/Client/FindClientController.js'
import { DeleteClientController } from '../controllers/Client/DeleteClientController.js'
import { UpdateClientController } from '../controllers/Client/UpdateClientController.js'

export const clientRouter = Router()

const createClientController = new CreateClientController()
const deleteClientController = new DeleteClientController()
const findClientController = new FindClientController()
const searchAllClientController = new SearchAllClientController()
const updateClientController = new UpdateClientController()

clientRouter.get('/', searchAllClientController.handle)
clientRouter.post('/', createClientController.handle)
clientRouter.get('/:id', findClientController.handle)
clientRouter.delete('/:id', deleteClientController.handle)
clientRouter.put('/:id', updateClientController.handle)

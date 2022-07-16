const { Router } = require('express')

const router = Router()

const createClientController = require('../controllers/Client/CreateClientController')
const searchAllClientController = require('../controllers/Client/SearchAllClientController')
const findClientController = require('../controllers/Client/FindClientController')
const deleteClientController = require('../controllers/Client/DeleteClientController')
const updateClientController = require('../controllers/Client/UpdateClientController')

router.get('/', searchAllClientController.get)
router.post('/', createClientController.post)
router.get('/:id', findClientController.get)
router.delete('/:id', deleteClientController.delete)
router.put('/:id', updateClientController.put)

module.exports = router
'use-strict';

import { ClientRepository } from '../../shared/repositories/client.js'

export class DeleteClientController {

  async handle(req, res) {
    try {

      const clientRepository = new ClientRepository()

      const clientID = req.params.id

      const client = await clientRepository.findByID(clientID)

      if (!client) return res.status(404).json({ message: `Este cliente não existe.` })

      await clientRepository.deleteByID(clientID)

      return res.status(204)

    } catch (err) {

    }
  }
}
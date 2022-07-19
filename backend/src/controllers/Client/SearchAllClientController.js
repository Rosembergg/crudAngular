'use-strict';

import { ClientRepository } from '../../shared/repositories/client.js'

export class SearchAllClientController {
  async handle(req, res) {

    try {

      const clientRepository = new ClientRepository()

      const client = await clientRepository.findAll()

      let clientes = []

      client.forEach(client => {
        return clientes.push(client.dataValues)
      })

      return res.json(clientes)

    } catch (err) {

    }

  }
}
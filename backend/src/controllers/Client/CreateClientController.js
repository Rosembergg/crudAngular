'use-strict';

import { ClientRepository } from '../../shared/repositories/client.js'

export class CreateClientController {
  async handle(req, res) {
    try {

      const clientRepository = new ClientRepository()

      const { nome, rua, bairro, complemento, telefone, cep } = req.body

      const client = await clientRepository.create({
        nome,
        rua,
        bairro,
        complemento,
        telefone,
        cep
      })

      return res.json(client)

    } catch (err) {
      console.log(err)
    }
  }
}
'use-strict';

import { ClientRepository } from '../../shared/repositories/client.js'

export class CreateClientController {
  async handle(req, res) {
    try {

      const clientRepository = new ClientRepository()

      const { cep, endereco, bairro, complemento, cidade, nome, telefone } = req.body

      const client = await clientRepository.create({
        nome,
        endereco,
        bairro,
        complemento,
        telefone,
        cidade,
        cep
      })

      return res.json(client)

    } catch (err) {
      console.log(err)
    }
  }
}
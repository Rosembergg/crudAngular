import { client } from '../models/client.js'

export class ClientRepository {

  async create(clientData) {
    return await client.create({
      ...clientData
    })
  }

  async findAll() {
    return await client.findAll()
  }

  async findByID(id) {
    const clientData = await client.findOne({
      where: {
        id
      }
    })
    if (!clientData) return clientData
    return clientData.dataValues
  }

  async deleteByID(id) {
    return await client.destroy({
      where: {
        id
      }
    })
  }

  async save(clientData) {
    const id = clientData.id

    delete (clientData.id)
    delete (clientData.createdAt)

    return await client.update({
      ...clientData
    }, {
      where: { id: id }
    })
  }
}
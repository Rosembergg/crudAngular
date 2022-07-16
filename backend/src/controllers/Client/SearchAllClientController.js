'use-strict';

const clientRepository = require('../../shared/repositories/client')

exports.get = async (req, res) => {

  try {
    const client = await clientRepository.findAll()

    let clientes = []

    client.forEach(client => {
      return clientes.push(client.dataValues)
    })

    return res.json(clientes)

  } catch (err) {

  }

}

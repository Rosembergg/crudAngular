'use-strict';

const clientRepository = require('../../shared/repositories/client')

exports.get = async (req, res) => {

  try {

    const clientID = req.params.id

    const client = await clientRepository.findByID(clientID)

    if (!client) return res.status(404).json({ message: `Este cliente não existe.` })

    return res.json(client)

  } catch (err) {

  }
}

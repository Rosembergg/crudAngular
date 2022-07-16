'use-strict';

const clientRepository = require('../../shared/repositories/client')

exports.put = async (req, res) => {

  try {

    const clientUpdateData = req.body
    const clientID = req.body.id

    const client = await clientRepository.findByID(clientID)
    

    if(JSON.stringify(client) == JSON.stringify(clientUpdateData)) return res.status(200).json(clientUpdateData)

    const update = await clientRepository.save(clientUpdateData)

    if(update[0] == 0) return res.status(400).json({ message: 'Não foi possivel atualizar.' })

    return res.json(clientUpdateData)


  } catch (err) {
    console.log(err);
  }
}
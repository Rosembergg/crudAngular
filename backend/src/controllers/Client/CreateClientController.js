'use-strict';

const clientRepository = require('../../shared/repositories/client')

exports.post = async (req, res) => {
  try {

    const { nome, rua, bairro, complemento, telefone, cep  } = req.body

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
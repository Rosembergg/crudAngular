const client = require('../models/client')

exports.create = async function (clientData) {
  return await client.create({
    ...clientData
  })
}

exports.findAll = async function () {
  return await client.findAll()
}

exports.findByID = async function (id) {
  const clientData = await client.findOne({
    where: {
      id
    }
  })
  if (!clientData) return clientData
  return clientData.dataValues
}

exports.deleteByID = async function (id) {
  return await client.destroy({
    where: {
      id
    }
  })
}

exports.save = async function (clientData) {
  const id = clientData.id

  delete (clientData.id)
  delete (clientData.createdAt)
  
  return await client.update({
    ...clientData
  }, {
    where: { id: id }
  })
}
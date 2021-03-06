import Sequelize from 'sequelize'

import { database } from '../db/db.config.js'

export const client = database.define('client', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cidade: {
    type: Sequelize.STRING,
    allowNull: false
  },
  bairro: {
    type: Sequelize.STRING,
    allowNull: false
  },
  complemento: {
    type: Sequelize.STRING,
    allowNull: false
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cep: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
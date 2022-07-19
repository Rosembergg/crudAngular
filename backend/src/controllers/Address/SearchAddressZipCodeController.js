'use-strict'

import { api } from '../../shared/service/api.js'

export class SearchAddressZipCodeController {
  async handle(req, res) {
    try {

      const { zipcode } = req.params

      let response = await api.get(`/${zipcode}/json`)
      response = response.data

      return res.json({
        cep: response.cep,
        endereco: response.logradouro,
        bairro: response.bairro,
        cidade: response.localidade,
        complemento: response.complemento,
        uf: response.uf
      })

    } catch (err) {

    }
  }
}
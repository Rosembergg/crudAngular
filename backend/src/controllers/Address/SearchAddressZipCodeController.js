'use-strict'

import { api } from '../../shared/service/api.js'

export class SearchAddressZipCodeController {
  async handle(req, res) {
    try {
      const { zipcode } = req.params
      let response = await api.get(`/${zipcode}/json`)

      const {cep, logradouro, localidade, bairro, complemento, uf} = response.data !== null || response.data !== undefined ? response.data : "";
      
      return res.json({ cep, endereco: logradouro, bairro, complemento, cidade: localidade, estado: uf })

    } catch (err) {
      console.log(`Ocorreu um erro! : ${err}`)
    }
  }
}
import Axios, { AxiosRequestTransformer, AxiosResponseTransformer, CreateAxiosDefaults } from 'axios'
import humps from 'humps'

export const config: CreateAxiosDefaults = {
  transformResponse: [
    ...(Axios.defaults.transformResponse as AxiosResponseTransformer[]),
    (data: object[]) => humps.camelizeKeys(data),
  ],

  transformRequest: [
    (data: object[], headers: any) => humps.decamelizeKeys(data),
    ...(Axios.defaults.transformRequest as AxiosRequestTransformer[]),
  ],
}

const ApiProvider = Axios.create(config)
export default ApiProvider

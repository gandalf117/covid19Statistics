import axios from 'axios'
import { API_COVID19_ROOT } from '@/api/config'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.withCredentials = false

export default class Http {
  static init (properties) {
    axios.defaults.baseURL = API_COVID19_ROOT
    if (properties.hasOwnProperty('base_url')) {
      axios.defaults.baseURL = properties.base_url
    }
  }

  static get (properties) {
    Http.init(properties)
    return axios({
      method: 'get',
      url: properties.url,
      params: properties.params
    })
  }

  static post (properties) {
    Http.init(properties)
    return axios({
      method: 'post',
      url: properties.url,
      data: properties.data
    })
  }

  static patch (properties) {
    Http.init(properties)
    return axios({
      method: 'patch',
      url: properties.url,
      data: properties.data
    })
  }

  static put (properties) {
    Http.init(properties)
    return axios({
      method: 'put',
      url: properties.url,
      data: properties.data
    })
  }

  static _delete (properties) {
    Http.init(properties)
    return axios({
      method: 'delete',
      url: properties.url
    })
  }
}

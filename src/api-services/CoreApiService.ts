import type { AxiosError, AxiosResponse } from 'axios'

import ApiProvider from './ApiProvider'

const headers = () => ({
  // Authorization: `Bearer ${getAuthStore().accessToken}`,
})

const responseData = <T extends AxiosResponse<any, any>>(response: T) => response.data

const handleError = (error: AxiosError) => {
  const status = error?.response?.status

  if (status == 401 || status == 403) {
    // getGlobalState().internal.disconnect?.()
  }

  throw error
}

class CoreApiService {
  baseUrl: string

  constructor(url: string) {
    this.baseUrl = url
  }

  get = async <R>(pathname: string, params: AnyObject = {}) =>
    ApiProvider.request<R>({
      method: 'get',
      url: `${this.baseUrl}/${pathname}`,
      headers: headers(),
      params,
    })
      .then<R>(responseData)
      .catch(handleError)

  put = async <R>(pathname: string, data: AnyObject) =>
    ApiProvider.request<R>({
      method: 'put',
      url: `${this.baseUrl}/${pathname}`,
      headers: headers(),
      data,
    })
      .then<R>(responseData)
      .catch(handleError)

  patch = async <R>(pathname: string, data: AnyObject = {}) =>
    ApiProvider.request<R>({
      method: 'patch',
      url: `${this.baseUrl}/${pathname}`,
      headers: headers(),
      data,
    })
      .then<R>(responseData)
      .catch(handleError)

  delete = async <R>(pathname: string, data: AnyObject = {}) =>
    ApiProvider.request<R>({
      method: 'delete',
      url: `${this.baseUrl}/${pathname}`,
      headers: headers(),
      data,
    })
      .then<R>(responseData)
      .catch(handleError)
}

export default CoreApiService

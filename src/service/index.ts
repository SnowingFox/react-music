import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
})

instance.interceptors.response.use(res => res.data)

export function request<R = any, T = any>(config: AxiosRequestConfig<T> = {}): Promise<AxiosResponse<R>['data']> {
  if (!config.method) {
    config.method = 'get'
  }
  return instance(config) as unknown as Promise<AxiosResponse<R>['data']>
}


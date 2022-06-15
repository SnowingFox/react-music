import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
})

instance.interceptors.response.use(res => res.data)

export function request(config: AxiosRequestConfig = {}) {
  if (!config.method) {
    config.method = 'get'
  }
  return instance(config)
}


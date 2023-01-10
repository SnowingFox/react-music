import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
})

instance.interceptors.response.use((data) => data.data)

export function request<T = any>(config: AxiosRequestConfig) {
  return instance<T>({
    method: 'GET',
    ...config,
  }) as Promise<T>
}

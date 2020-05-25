import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

instance.defaults.headers.post['Content-type'] = 'application/json'

instance.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    console.log(request)
    return request
  },
  (error: AxiosError) => {
    console.log(error)
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default instance

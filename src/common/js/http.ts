import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
// import { ElLoading } from "element-plus";

// let loading: any

// 请求拦截
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  //
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截
axios.interceptors.response.use((response: AxiosResponse<any>) => {
  //
  return response
}, err => {
  return Promise.reject(err.response)
})

export default axios

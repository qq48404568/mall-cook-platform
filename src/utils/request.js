import axios from 'axios'
import store from '@store'
import global from '@config/global'

const request = axios.create({
  baseUrl: global.baseApi,
  withCredentials: true, //表示跨域请求时是否需要使用凭证
  timeout: 15000 // 如果请求话费了超过 `timeout` 的时间，请求将被中断
})

request.interceptors.request.use(config => {
  return config
})

request.interceptors.response.use(config => {
  return config
})

export default request
import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import global from '@/config/global'

const request = axios.create({
  baseURL: global.baseApi,
  withCredentials: true, //表示跨域请求时是否需要使用凭证
  timeout: 15000 // 如果请求话费了超过 `timeout` 的时间，请求将被中断
})

request.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['Authorization'] = store.getters.token
  }
  return config
})

request.interceptors.response.use(response => {
  const token = response.headers['right-token']
  token && store.commit('setToken', token)

  return response.data
})

export default request
import request from '@/utils/request'

/**
 * 登录
 */
export const login = async () => request({ url: '/login', method: 'POST', data })

/**
 * 注册
 */
export const register = async () => request({ url: '/register', method: 'POST', data })
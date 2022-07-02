import store from '@/store'

const TokenKey = 'token'
const UserInfoKey = 'user-info'
const ProjectKey = 'mall-project'

// 获取token
export function getAuthToken () {
  return sessionStorage.getItem(TokenKey)
}

// 设置token
export function setAuthToken (token) {
  return sessionStorage.setItem(TokenKey, token)
}

export function removeAuthToken () {
  return sessionStorage.removeItem(TokenKey)
}

export function setAuthUserInfo (userInfo) {
  return sessionStorage.setItem(UserInfoKey, JSON.stringify(userInfo))
}

export function getAuthUserInfo () {
  let userInfoStr = sessionStorage.getItem(UserInfoKey)
  return userInfoStr ? JSON.parse(sessionStorage.getItem(UserInfoKey)) : null
}



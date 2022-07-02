import {
  setAuthToken,
  getAuthToken,
  setAuthUserInfo,
  getAuthUserInfo
} from '@/utils/auth'

export default {
  state:{
    token:getAuthToken(),
    userInfo:getAuthUserInfo()
  },
  getters:{

  },
  mutations:{
    setToken(state,token){
      state.token = token
      setAuthToken(token)
    },
    setUserInfo(state,userInfo){
      state.userInfo = userInfo
      setAuthUserInfo(userInfo)
    },
    logout(state){
      state.token = null
      state.userInfo = null
      sessionStorage.clear()
      localStorage.clear()
    }
  },
}
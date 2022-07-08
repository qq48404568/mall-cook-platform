import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/scss/index.scss'

import {
  getWrapStyle,
  getComponentStyle,
  getMultiBackground
} from '@/utils/style'

/**
 * Axios 捷径
 */
import createAxiosShortcut from 'axios-shortcut'

// require
import request from '@/utils/request'

import _ from 'lodash'
// import global from '@/config/global'
Vue.prototype._= _

// 全局注册组件
// import '@/utils/globalRegister.js'

const axiosShortcut = createAxiosShortcut(request)
for (let k in axiosShortcut) {
  if (!Vue.prototype[`$${k}`]) {
    Object.defineProperty(Vue.prototype, `$${k}`, {
      value: axiosShortcut[k]
    })
  }
}

// Element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import ElementVerify from 'element-verify'

Vue.use(ElementUI)
Vue.use(ElementVerify)


Vue.config.productionTip = false

Vue.prototype.$getWrapStyle = getWrapStyle
Vue.prototype.$getComponentStyle = getComponentStyle
Vue.prototype.$getMultiBackground = getMultiBackground


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

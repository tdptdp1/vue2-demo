import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 重置浏览器默认样式
import './style/common.css'
// 完整引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入阿里图标
import './icons/iconfont'
Vue.config.productionTip = false
// 注册ElementUI
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

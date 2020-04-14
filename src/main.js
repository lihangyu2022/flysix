import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import './style/index.less'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.ues(ElementUI) // 全局注册

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

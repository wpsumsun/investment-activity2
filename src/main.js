import Vue from 'vue'
import animate from 'animate.css'
import App from './App.vue'
// import { WechatPlugin } from 'vux'

Vue.config.productionTip = false
Vue.use(animate)
// Vue.use(WechatPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')

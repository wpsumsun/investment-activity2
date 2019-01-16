import Vue from 'vue'
import animate from 'animate.css'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(animate)

new Vue({
  render: h => h(App),
}).$mount('#app')

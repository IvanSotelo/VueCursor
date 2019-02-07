import Vue from 'vue'
import App from './App.vue'
import { VueCursor } from './index'

Vue.config.productionTip = false

new Vue({
  components: { VueCursor },
  render: h => h(App)
}).$mount('#app')

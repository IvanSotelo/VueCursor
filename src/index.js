import VueCursor from './components/VueCursor'
import pjson from '../package.json'

export default {
  install (Vue) {
    Vue.component('vue-cursor', VueCursor)
    Vue.mixin({
      // Add component lifecycle hooks or properties.
      created () {
        console.log(`%c Created By Ivan Sotelo %c ${pjson.version} `, 'background: #35495e; color: #fff', 'background: #60b883; color: #fff')
      }
    })
  }
}

export { VueCursor }

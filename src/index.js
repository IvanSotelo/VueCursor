import VueCursor from './components/VueCursor'
import pjson from '../package.json'

export default {
  install (Vue) {
    Vue.component('vue-cursor', VueCursor)
    Vue.mixin({
      created () {
        // eslint-disable-next-line no-console
        console.log(`%c Created By Ivan Sotelo %c ${pjson.version} `, 'background: #35495e; color: #fff', 'background: #60b883; color: #fff')
      }
    })
  }
}

export { VueCursor }

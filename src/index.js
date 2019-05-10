import VueCursor from './components/VueCursor'
import pjson from '../package.json'

export default {
  install (Vue) {
    Vue.component('vue-cursor', VueCursor)
  }
}

export { VueCursor }

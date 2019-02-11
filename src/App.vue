<template lang="pug">
  #app
    .nav
      a(data-hover) Hola
    vue-cursor(blend-mode="screen")
</template>

<script>
import { VueCursor } from './index'
export default {
  name: 'app',
  components: { VueCursor }
}
</script>
<style lang="stylus">
*
  cursor none !important

html,body
  height 100%

body
  margin 0
  padding 0
  background-color #f1f1f1

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  position fixed
  background #5448ad
  background linear-gradient(45deg, #5448ad 0%, #a79ce7 100%)
  height 100%
  width 100%
</style>

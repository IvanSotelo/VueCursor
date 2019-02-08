<template lang="pug">
  #app
    .nav
      a(data-hover) Hola
    vue-cursor
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

body
  background-color #f1f1f1

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  height 100vh
  display absolute
  background-color #fff
</style>

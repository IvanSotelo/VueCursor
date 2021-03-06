<template lang="pug">
  .vue-cursor
    .cursor__inner.cursor__inner--circle
    .cursor__inner.cursor__inner--dot
    span.cursor__inner.cursor__inner--text &nbsp;
</template>
<script>
import pjson from '../../package.json'
export default {
  name: 'VueCursor',
  props: {
    blendMode: {
      default: 'difference',
      type: String
    }
  },
  data: () => ({
    DOM: {},
    bounds: {},
    scale: 1,
    opacity: 1,
    winsize: {
      width: 0,
      height: 0
    },
    mousePos: {
      x: 0,
      y: 0
    },
    lastMousePos: {
      dot: {
        x: 0,
        y: 0
      },
      circle: {
        x: 0,
        y: 0
      },
      title: {
        x: 0,
        y: 0
      }
    },
    lastScale: 1,
    lastOpacity: 1
  }),
  created () {
    // eslint-disable-next-line no-console
    console.log(`%c VueCursor Created By Ivan Sotelo %c ${pjson.version} `, 'background: #35495e; color: #fff', 'background: #60b883; color: #fff')
  },
  mounted () {
    this.DOM.el = this.$el
    this.DOM.dot = this.DOM.el.querySelector('.cursor__inner--dot')
    this.DOM.circle = this.DOM.el.querySelector('.cursor__inner--circle')
    this.DOM.title = this.DOM.el.querySelector('.cursor__inner--text')
    this.winsize.width = window.innerWidth
    this.winsize.height = window.innerHeight
    this.bounds = { dot: this.DOM.dot.getBoundingClientRect(), circle: this.DOM.circle.getBoundingClientRect(), title: this.DOM.title.getBoundingClientRect() }
    this.initEvents()
    requestAnimationFrame(() => this.render())
  },
  methods: {
    initEvents () {
      // Custom cursor chnages state when hovering on elements with 'data-hover'.
      [...document.querySelectorAll('[data-hover]')].forEach((link) => {
        const title = link.dataset.title ? link.dataset.title : ''
        // Show the title next to the cursor.
        link.addEventListener('mouseenter', () => this.setTitle(title))
        link.addEventListener('mouseleave', () => this.setTitle(''))
        link.addEventListener('mouseenter', () => this.enter())
        link.addEventListener('mouseleave', () => this.leave())
        link.addEventListener('click', () => this.click())
      })
      window.addEventListener('resize', () => {
        this.winsize.width = window.innerWidth
        this.winsize.height = window.innerHeight
      })
      window.addEventListener('mousemove', ev => { this.mousePos = this.getMousePos(ev) })
    },
    lerp (a, b, n) {
      return (1 - n) * a + n * b
    },
    getMousePos (e) {
      const body = document.body
      let posx = 0
      let posy = 0
      !e && (e = window.event)
      if (e.pageX || e.pageY) {
        posx = e.pageX
        posy = e.pageY
      } else if (e.clientX || e.clientY) {
        posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft
        posy = e.clientY + body.scrollTop + document.documentElement.scrollTop
      }
      return { x: posx, y: posy }
    },
    render () {
      // Mouse movement distance on the x-axis
      const diff = this.lastMousePos.circle.x - (this.mousePos.x - this.bounds.circle.width / 2)
      const rightSide = this.mousePos.x >= this.winsize.width / 2
      // Switch the side of the title element
      // this.DOM.title.style.left = rightSide ? 'auto' : '30px'
      // this.DOM.title.style.right = rightSide ? '3px' : 'auto'
      // The position of the title/toggle and the viewport side will determine the speed for both of these elements
      const lerpFactor = {
        toggle: rightSide ? diff < 0 ? 0.15 : 0.1 : diff < 0 ? 0.1 : 0.15,
        title: rightSide ? diff < 0 ? 0.1 : 0.15 : diff < 0 ? 0.15 : 0.1
      }
      this.lastMousePos.dot.x = this.lerp(this.lastMousePos.dot.x, this.mousePos.x - this.bounds.dot.width / 2, 1)
      this.lastMousePos.dot.y = this.lerp(this.lastMousePos.dot.y, this.mousePos.y - this.bounds.dot.height / 2, 1)
      this.lastMousePos.circle.x = this.lerp(this.lastMousePos.circle.x, this.mousePos.x - this.bounds.circle.width / 2, 0.15)
      this.lastMousePos.circle.y = this.lerp(this.lastMousePos.circle.y, this.mousePos.y - this.bounds.circle.height / 2, 0.15)
      this.lastMousePos.title.x = this.lerp(this.lastMousePos.title.x, this.mousePos.x - this.bounds.title.width / 2, lerpFactor.title)
      this.lastMousePos.title.y = this.lerp(this.lastMousePos.title.y, this.mousePos.y - this.bounds.title.height / 2, lerpFactor.title)
      this.lastScale = this.lerp(this.lastScale, this.scale, 0.15)
      this.lastOpacity = this.lerp(this.lastOpacity, this.opacity, 0.1)
      this.DOM.dot.style.transform = `translateX(${(this.lastMousePos.dot.x)}px) translateY(${this.lastMousePos.dot.y}px)`
      this.DOM.dot.style.mixBlendMode = this.blendMode
      this.DOM.circle.style.transform = `translateX(${(this.lastMousePos.circle.x)}px) translateY(${this.lastMousePos.circle.y}px) scale(${this.lastScale})`
      this.DOM.circle.style.opacity = this.lastOpacity
      this.DOM.circle.style.mixBlendMode = this.blendMode
      this.DOM.title.style.transform = `translateX(${(this.lastMousePos.title.x)}px) translateY(${this.lastMousePos.title.y}px)`
      requestAnimationFrame(() => this.render())
    },
    setTitle (title) {
      // Sets the title content
      this.DOM.title.innerHTML = title
    },
    enter () {
      this.scale = 2.7
    },
    leave () {
      this.scale = 1
    },
    click () {
      this.lastScale = 1
      this.lastOpacity = 0
    }
  }
}
</script>

<style lang="stylus">
.cursor__inner
 z-index 9999
 pointer-events none
 position absolute
 top 0
 left 0
 border-radius 50%

.cursor__inner--dot
 width 6px
 height 6px
 background #fff

.cursor__inner--circle
 width 20px
 height 20px
 border 1px solid #fff

.cursor__inner--text
 white-space nowrap
 left 50px
 margin-top 1px
 color #FFF

 *,
 *::after,
 *::before
  @media screen and (min-width: 53em)
   cursor none !important

.vue-cursor
 @media screen and (max-width: 53em)
  visibility hidden
</style>

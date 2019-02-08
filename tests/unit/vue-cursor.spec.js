import { shallowMount } from '@vue/test-utils'
import VueCursor from '@/components/VueCursor.vue'

describe('VueCursor.vue', () => {
  it('render component', () => {
    const wrapper = shallowMount(VueCursor)
    expect(wrapper.find('.vue-cursor'))
  })
})

// Libraries
import Vuetify from 'vuetify'

// Utilities
import { createLocalVue, mount } from '@vue/test-utils'

// Components
import IndexPage from '@/pages/index'

describe('pages/index.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should have a name and match snapshot', () => {
    const wrapper = mount(IndexPage, {
      localVue,
      vuetify
    })

    // We could also verify this differently
    // by checking the text content
    const name = wrapper.find('p.headline')

    expect(name.text()).toBe('Emilio Romero')
  })
})

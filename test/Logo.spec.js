import { mount } from '@vue/test-utils'
import Logo from '~/components/header/Logo.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.vm).toBeTruthy()
  })
})

import LogoAlternative from '~/components/header/LogoAlternative.vue'

describe('LogoAlternative', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.vm).toBeTruthy()
  })
})

import LogoNegative from '~/components/header/LogoNegative.vue'

describe('LogoNegative', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.vm).toBeTruthy()
  })
})

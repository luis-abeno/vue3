import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ExampleComponent from '../src/components/ExampleComponent.vue'

describe('ExampleComponent', () => {
  it('should render the correct message', () => {
    const wrapper = mount(ExampleComponent)
    expect(wrapper.text()).toBe('Hello, World!!')
  })
})

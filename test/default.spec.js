import { mount } from '@vue/test-utils'
import Default from '@/layouts/default.vue'

describe('First', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(Default)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
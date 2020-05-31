import { mount } from '@vue/test-utils'
import First from '@/components/FirstComponent.vue'

describe('First', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(First);
        expect(wrapper.isVueInstance()).toEqual(true)
        expect(First.data()).toEqual({ name: 'Nicola' })
    })
})
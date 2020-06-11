import { mount } from '@vue/test-utils'
import First from '@/components/FirstComponent.vue'

const data = First.data();
const resultForm = {
    email: 'solazzo.nicola@gmail.com',
    name: 'nicola',
    food: data.foods[2].value,
    price: data.prices[2].value,
    checked: [
        "privacy",
        "terms"
    ]
}

describe('First', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(First);

        //expect(wrapper.isVueInstance()).toEqual(true)
        expect(data.foods[2].value).toEqual('beans')
        expect(resultForm).toEqual({
            email: 'solazzo.nicola@gmail.com',
            name: 'nicola',
            food: 'beans',
            price: '20',
            checked: [
                "privacy",
                "terms"
            ]
        })

    })
})
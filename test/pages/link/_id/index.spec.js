import { mount, shallowMount } from '@vue/test-utils'
import LinkID from '@/pages/link/_id/index.vue'


function getMountedComponent(Component, propsData) {
    return shallowMount(Component, {
        propsData
    })
}

describe('LinkID', () => {
    it('Validate is Number == true ', () => {
        expect(LinkID.validate('1')).toBe(true);
        expect(LinkID.validate(1)).toBe(true);
    })

    it('Validate is NOT Number == false ', () => {
        expect(LinkID.validate('abc')).toBe(false);
        expect(LinkID.validate('2a')).toBe(false);
    })

    it('testJest is ', () => {
        expect(LinkID.testJest(123)).toEqual(true);
        expect(LinkID.testJest('123')).toEqual(true);
        expect(LinkID.testJest('abc')).toEqual(false);
        expect(LinkID.testJest('123abc')).toEqual(false);
    })

    it('renders correctly with different props', async() => {
        expect(
            getMountedComponent(LinkID, {
                msg: 'Hello'
            }).text()
        ).toBe('Hello')

        expect(
            getMountedComponent(LinkID, {
                msg: 'Bye'
            }).text()
        ).toBe('Bye')
    })

})
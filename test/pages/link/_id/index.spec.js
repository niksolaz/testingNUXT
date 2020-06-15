import { mount, shallowMount } from '@vue/test-utils'
import LinkID from '@/pages/link/_id/index.vue'

const can = {
    paramsString: '1',
    paramsNum: 1,
};

const cannot = {
    paramsString: 'abc',
    paramsNum: '2a',
};

describe('LinkID', () => {
    it('Validate is Number == true ', () => {
        expect(LinkID.validate(can.paramsString)).toBe(true);
        expect(LinkID.validate(can.paramsNum)).toBe(true);
    })

    it('Validate is NOT Number == false ', () => {
        expect(LinkID.validate(cannot.paramsString)).toBe(false);
        expect(LinkID.validate(cannot.paramsNum)).toBe(false);
    })

    it('testJest is ', () => {
        expect(LinkID.testJest(123)).toEqual(true);
        expect(LinkID.testJest('123')).toEqual(true);
        expect(LinkID.testJest('abc')).toEqual(false);
        expect(LinkID.testJest('123abc')).toEqual(false);
    })
})
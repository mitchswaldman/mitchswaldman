import {arr_diff} from 'Helpers'

it('diffs arr', () => {
	expect(arr_diff(['a', 'b'], ['b', 'c'])).toEqual(['c'])
	expect(arr_diff([], ['a', 'b'])).toEqual(['a', 'b'])
	expect(arr_diff(['a', 'b', 'c'], ['a', 'b'])).toEqual([])
})
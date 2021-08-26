import foldArray from '../src/04';

describe('foldArray', () => {
  describe('single fold', () => {
    it('can fold an array with even length', () => {
      expect(foldArray([1, 2, 3, 4], 1)).toEqual([5, 5]);
      expect(foldArray([1, 2, 3, 4, 5, 6], 1)).toEqual([7, 7, 7]);
      expect(foldArray([1, 1, 1, 1, 1, 1, 1, 1], 1)).toEqual([2, 2, 2, 2]);
      expect(foldArray([100, 100, 10, 10], 1)).toEqual([110, 110]);
    })
  
    it('can fold an array with odd length', () => {
      expect(foldArray([1, 2, 3], 1)).toEqual([4, 2]);
      expect(foldArray([1, 1, 3, 2, 2], 1)).toEqual([3, 3, 3]);
      expect(foldArray([10, 10, 1, 5, 5, 5, 5], 1)).toEqual([15, 15, 6, 5]);
    })
  })

  describe('multiple folds', () => {
    it('can fold an array with even length multiple times', () => {
      expect(foldArray([1, 2, 3, 4, 5, 6], 2)).toEqual([14, 7])
    })

    it('can fold an array with odd length multiple times', () => {
      expect(foldArray([1, 2, 3, 4, 5, 6, 7], 2)).toEqual([12, 16])
    })
  })
})

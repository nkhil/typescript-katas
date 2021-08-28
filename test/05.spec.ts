import diagonalDifference from '../src/05';

describe('diagonalDifference', () => {
  it('can calculate the diagonal difference correctly', () => {
    expect(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])).toEqual(15);
    expect(diagonalDifference([[10, 20, 30], [40, 50, 60], [70, 80, 90]])).toEqual(0);
    expect(diagonalDifference([[1, 2, 3], [3, 2, 1], [3, 2, 1]])).toEqual(4);
  })
})

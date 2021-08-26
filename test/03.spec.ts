import order from '../src/03';

describe('order', () => {
  it('1 - can order a sentence correctly', () => {
    const input = 'is2 Thi1s T4est 3a';
    const expected = 'Thi1s is2 3a T4est';
    expect(order(input)).toEqual(expected);
  })
  it('2 - can order a sentence correctly', () => {
    const input = '4of Fo1r pe6ople g3ood th5e the2';
    const expected = 'Fo1r the2 g3ood 4of th5e pe6ople';
    expect(order(input)).toEqual(expected);
  })
})

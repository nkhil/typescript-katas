import digitalRoot from '../src/02';

describe('digitalRoot', () => {
  it('can calculate the recursive sum of digits for a small sum', () => {
    expect(digitalRoot(16)).toEqual(7);
  })

  it('can calculate the recursive sum of large sum', () => {
    expect(digitalRoot(942)).toEqual(6);
    expect(digitalRoot(132189)).toEqual(6);
    expect(digitalRoot(493193)).toEqual(2);
  })
})

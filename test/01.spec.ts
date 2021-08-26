import parse from '../src/01';

describe('parse', () => {
  it('can increment values', () => {
    expect(parse('iiio')).toEqual([3]);
    expect(parse('iiiiio')).toEqual([5]);
  });

  it('returns an empty array when no output requested', () => {
    expect(parse('iiiiiiiii')).toEqual([]);
  });

  it('can decrement values correctly', () => {
    expect(parse('dddddo')).toEqual([-5]);
  });

  it('can output results correctly', () => {
    expect(parse('iiiodoiiio')).toEqual([3, 2, 5]);
  });

  it('can increment, decrement and square scores accurately', () => {
    expect(parse('iiiodoso')).toEqual([3, 2, 4]);
  });
});

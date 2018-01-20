import { expect } from 'chai';
import largestCol from '../largestCol';

describe('utils::largestCol', () => {
  it('gives me the longest word i have used', () => {
    expect(largestCol({
      a:    true,
      ab:   true,
      abc:  true,
      abdc: true,
    })).to.eq(3);
  });
});

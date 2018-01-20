import { expect } from 'chai';
import toString from '../toString';

describe('utils::toString', () => {
  it('stringifies a grid', () => {
    let grid = [];
    expect(toString(grid)).to.eq('');

    grid = [['a'], ['b'], ['c']];
    expect(toString(grid)).to.eq('a\nb\nc');

    grid = [['ab'], ['cd'], ['ef']];
    expect(toString(grid)).to.eq('ab\ncd\nef');
  });
});

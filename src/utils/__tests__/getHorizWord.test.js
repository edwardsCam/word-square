import { expect } from 'chai';
import getHorizWord from '../getHorizWord';

describe('utils::getHorizWord', () => {
  it('gets the word on the grid at a given row', () => {
    const grid = [
      [ 's', 'p', 'a', 'g', 'h', 'e', 't' ]
    ];
    expect(getHorizWord(grid, 0)).to.eq('spaghet');

    grid.push([
      'm', 'e', 'm', 'e', 's'
    ]);
    expect(getHorizWord(grid, 1)).to.eq('memes');
  });
});

import { expect } from 'chai';
import getVertWord from '../getVertWord';

describe('utils::getVertWord', () => {
  it('gets the word on the grid at a given column', () => {
    const grid = [
      ['s'],
      ['p'],
      ['a'],
      ['g'],
      ['h'],
      ['e'],
      ['t']
    ];
    expect(getVertWord(grid, 0)).to.eq('spaghet');

    grid[0].push('m');
    grid[1].push('e');
    grid[2].push('m');
    grid[3].push('e');
    grid[4].push('s');
    grid[5].push(undefined);
    grid[6].push(null);
    expect(getVertWord(grid, 1)).to.eq('memes');
  });

  it('reads from the top down, and ignores hanging letters at the bototm', () => {
    const grid = [
      ['a'],
      ['b', 'x'],
      ['c', 'y'],
    ];
    expect(getVertWord(grid, 1)).to.eq('');
  });
});

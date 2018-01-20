import { expect } from 'chai';
import allWordsAreComplete from '../allWordsAreComplete';
import buildForest from '../buildForest';

describe('utils::allWordsAreComplete', () => {
  it('returns true if every vertical and horizontal word is complete', () => {
    const words = [
      'ab',
      'bo',
      'to',
      'at',
    ];
    const grid = [
      [ 'a', 'b' ],
      [ 't', 'o' ],
    ];
    const forest = buildForest(words);

    expect(allWordsAreComplete(grid, forest)).to.be.true;
  });

  it('returns false if any vertical or horizontal word is incomplete', () => {
    let words = [
      'ab',
      'bo',
      'to',
      'at',
    ];
    let grid = [
      [ 'a', 'b' ],
      [ 't' ],
    ];
    let forest = buildForest(words);
    expect(allWordsAreComplete(grid, forest)).to.be.false;

    words = [
      'ab',
      'bo',
      'toa',
      'at',
    ];
    grid = [
      [ 'a', 'b' ],
      [ 't', 'o' ],
    ];
    forest = buildForest(words);
    expect(allWordsAreComplete(grid, forest)).to.be.false;
  });
});

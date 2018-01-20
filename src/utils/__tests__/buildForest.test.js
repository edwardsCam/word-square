import { expect } from 'chai';
import buildForest from '../buildForest';

describe('utils::buildForest', () => {
  it('builds a forest for a list of words', () => {
    const words = [
      'bug',
      'bat',
      'all',
      'alpine',
    ];
    const forest = buildForest(words);
    expect(forest.trees().length).to.eq(2);
    words.forEach(word => {
      expect(forest.has(word)).to.be.true;
    });
  });
});

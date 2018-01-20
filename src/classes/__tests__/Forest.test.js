import { expect } from 'chai';
import Forest from '../Forest';

describe('classes::Forest', () => {
  it('lets me get the trees', () => {
    const forest = new Forest();
    expect(forest.trees()).to.eql([]);
  });

  it('lets me get the tree for a letter', () => {
    const forest = new Forest();
    forest.add('bacon');
    expect(forest.get('b')).not.to.be.undefined;
    expect(forest.get('x')).to.be.undefined;
  });

  it('lets me get the tree from a word', () => {
    const forest = new Forest();
    forest.add('bacon');
    expect(forest.getFromFirstLetter('baconed')).not.to.be.undefined;
    expect(forest.getFromFirstLetter('xyz')).to.be.undefined;
  });

  describe('#has', () => {
    it("tells me if there's a tree for that word", () => {
      const forest = new Forest();
      forest.add('bacon');
      expect(forest.has('baco')).to.be.true;
      expect(forest.has('bacon')).to.be.true;
    });

    it("tells me if there's no tree for that word", () => {
      const forest = new Forest();
      forest.add('bacon');
      expect(forest.has('bacons')).to.be.false;
      expect(forest.has('lolwut')).to.be.false;
    });
  });

  describe('#add', () => {
    it("adds a tree if there isn't one already", () => {
      const forest = new Forest();
      expect(forest.get('b')).to.be.undefined;
      forest.add('bacon');
      expect(forest.get('b')).not.to.be.undefined;
    });

    it('adds to the correct tree if there is one', () => {
      const forest = new Forest();
      forest.add('bacon');
      expect(forest.trees().length).to.eq(1);

      forest.add('broken');
      expect(forest.trees().length).to.eq(1);
    });
  });
});

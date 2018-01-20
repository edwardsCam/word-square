import { expect } from 'chai';
import SuffixTree from '../SuffixTree';

describe('classes::SuffixTree', () => {
  it("throws an error if you don't give a root value", () => {
    expect(() => {
      const badTree = new SuffixTree();
    }).to.throw('You tried to create a SuffixTree without a root value!');
  });

  it('lets me get the root', () => {
    const tree = new SuffixTree('x');
    expect(tree.root().value()).to.eq('x');
  });

  describe('#add', () => {
    it("doesn't let me add a word that doesn't start with the root value", () => {
      const tree = new SuffixTree('a');
      tree.add('wat');
      expect(tree.root().children()).to.eql([]);
    });

    it('lets me add a word', () => {
      const tree = new SuffixTree('a');
      tree.add('apple');
      expect(
        tree.root()
        .value()
      ).to.eq('a');
      expect(
        tree.root()
        .children()[0]
        .value()
      ).to.eq('p');
      expect(
        tree.root()
        .children()[0]
        .children()[0]
        .value()
      ).to.eq('p');
      expect(
        tree.root()
        .children()[0]
        .children()[0]
        .children()[0]
        .value()
      ).to.eq('l');
      expect(
        tree.root()
        .children()[0]
        .children()[0]
        .children()[0]
        .children()[0]
        .value()
      ).to.eq('e');
      expect(
        tree.root()
        .children()[0]
        .children()[0]
        .children()[0]
        .children()[0]
        .children()[0]
      ).to.be.undefined;
    });

    it('adds words starting from a common ancestor', () => {
      const tree = new SuffixTree('a');
      tree.add('apple');
      tree.add('apply');
      expect(
        tree.root()
        .children()
        .length
      ).to.eq(1);
      expect(
        tree.root()
        .children()[0]
        .children()
        .length
      ).to.eq(1);
      expect(
        tree.root()
        .children()[0]
        .children()[0]
        .children()
        .length
      ).to.eq(1);
      expect(
        tree.root()
        .children()[0]
        .children()[0]
        .children()[0]
        .children()
        .length
      ).to.eq(2);
    });
  });

  describe('#has', () => {
    it('tells me if i have this word already', () => {
      const tree = new SuffixTree('a');
      tree.add('axe');
      expect(tree.has('axe')).to.be.true;
    });

    it("tells me if i don't have this word already", () => {
      const tree = new SuffixTree('a');
      tree.add('axe');
      expect(tree.has('axl')).to.be.false;
    });
  });

  describe('#startsWith', () => {
    it('tells me if the tree starts with a letter', () => {
      const tree = new SuffixTree('a');
      expect(tree.startsWith('a')).to.be.true;
      expect(tree.startsWith('b')).to.be.false;
    });
  });

  describe('#getLastNodeOfWord', () => {
    it('gives me the node of the last char of a word', () => {
      const tree = new SuffixTree('a');
      tree.add('axe');
      const lastNode = tree.getLastNodeOfWord('axe');
      expect(lastNode.value()).to.eq('e');
    });
  });

  describe('#getWordFromNode', () => {
    it('gives me the word from root to the given node', () => {
      const tree = new SuffixTree('a');
      tree.add('apple');
      const lastNode = tree.getLastNodeOfWord('apple');

      expect(tree.getWordFromNode(lastNode)).to.eq('apple');

      const tree2 = new SuffixTree('b');
      expect(
        tree2.getWordFromNode(tree2.root())
      ).to.eq('b');
    });
  });
});

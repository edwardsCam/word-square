import { expect } from 'chai';
import SuffixTreeNode from '../SuffixTreeNode';

describe('classes::SuffixTreeNode', () => {
  it("throws an error if you don't give a value", () => {
    expect(() => {
      const badTree = new SuffixTreeNode();
    }).to.throw('You tried to create a SuffixTreeNode without a value!');
  });

  it('lets me get the value', () => {
    const node = new SuffixTreeNode('a');
    expect(node.value()).to.eq('a');
  });

  it('lets me get the parent', () => {
    const parentNode = new SuffixTreeNode('a');
    const childNode = parentNode.addChild('b');
    expect(childNode.parent()).to.eq(parentNode);
  });

  it('lets me get the successors of a node', () => {
    const node = new SuffixTreeNode('a');
    node.addChild('b');
    expect(node.children().length).to.eq(1);
    expect(node.children()[0].value()).to.eq('b');
  });

  it('tells me if there are successors', () => {
    const node = new SuffixTreeNode('a');
    expect(node.hasChildren()).to.be.false;
    node.addChild('b');
    expect(node.hasChildren()).to.be.true;
  });

  it('lets me get a specific child', () => {
    const node = new SuffixTreeNode('a');
    node.addChild('b');
    node.addChild('x');
    expect(node.getChild('b').value()).to.eq('b');
    expect(node.getChild('x').value()).to.eq('x');
    expect(node.getChild('z')).to.be.undefined;
  });
});

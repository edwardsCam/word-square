export default function SuffixTreeNode(val, par = null) {
  if (!val || typeof val !== 'string') {
    throw new Error('You tried to create a SuffixTreeNode without a value!')
  }
  const value = val;
  const parent = par;
  const children = [];

  this.value = function() {
    return value;
  };

  this.parent = function() {
    return parent;
  };

  this.children = function() {
    return children;
  };

  this.getChild = function(nextLetter = '') {
    return children.find(node => node.value() === nextLetter);
  };

  this.addChild = function(nextLetter = '') {
    const existing = this.getChild(nextLetter);
    if (existing) return existing;
    const newNode = new SuffixTreeNode(nextLetter, this);
    children.push(newNode);
    return newNode;
  };
}

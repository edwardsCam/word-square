import SuffixTreeNode from './SuffixTreeNode';

export default function SuffixTree(rootValue) {
  if (!rootValue || typeof rootValue !== 'string') {
    throw new Error('You tried to create a SuffixTree without a root value!')
  }
  const root = new SuffixTreeNode(rootValue);

  this.root = function() {
    return root;
  };

  this.add = function(word = '') {
    if (!this.startsWith(word[0])) return;
    let node = root;
    for (let i = 1; i < word.length; i++) {
      const c = word[i];
      if (!node.getChild(c)) {
        node.addChild(c);
      }
      node = node.getChild(c);
    }
  };

  this.has = function(word = '') {
    if (!this.startsWith(word[0])) return false;
    let node = root;
    for (let i = 1; i < word.length; i++) {
      const c = word[i];
      if (!node.getChild(c)) {
        return false;
      }
      node = node.getChild(c);
    }
    return true;
  };

  this.startsWith = function(letter = '') {
    return root.value() === letter;
  };

  this.getLastNodeOfWord = function(word = '') {
    if (!word.length || !this.startsWith(word[0])) return null;
    let node = root;
    for (let i = 1; i < word.length; i++) {
      const c = word[i];
      const nextNode = node.getChild(c);
      if (!nextNode) break;
      node = nextNode;
    }
    return node;
  };

  this.getWordFromNode = function(node) {
    let ret = '';
    let curr = node;
    while (curr) {
      ret += curr.value();
      curr = curr.parent();
    }
    return ret.split('').reverse().join('');
  };

  this.pretty = function() {
    return { [root.value()]: prettify(root) };
  };
}

const prettify = node => (
  node.children().reduce((obj, successor) => {
    obj[successor.value()] = prettify(successor);
    return obj;
  }, {})
)

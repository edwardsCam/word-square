import SuffixTree from './SuffixTree';

export default function Forest() {
  const trees = [];

  this.trees = function() {
    return trees;
  };

  this.get = function(rootLetter = '') {
    return trees.find(tree => (
      tree.root().value() === rootLetter
    ));
  };

  this.getFromFirstLetter = function(word = '') {
    return this.get(word[0]);
  };

  this.add = function(word = '') {
    const firstLetter = word[0];
    let tree = this.get(firstLetter);
    if (!tree) {
      tree = new SuffixTree(firstLetter);
      trees.push(tree);
    }
    tree.add(word);
  };

  this.has = function(word = '') {
    const tree = this.getFromFirstLetter(word);
    return tree ? tree.has(word) : false;
  };

  this.pretty = function() {
    return trees.reduce((obj, tree) => (
      { ...obj, ...tree.pretty() }
    ), {});
  };
}

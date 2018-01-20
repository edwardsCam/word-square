import Forest from '../classes/Forest';

export default function buildForest(dictionary) {
  return dictionary.reduce((forest, word) => {
    forest.add(word);
    return forest;
  }, new Forest());
}

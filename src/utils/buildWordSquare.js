import buildForest from './buildForest';
import getHorizWord from './getHorizWord';
import getVertWord from './getVertWord';
import { timer, failedPromise } from './promise';
import uppity from './uppity';
import largestCol from './largestCol';
import allWordsAreComplete from './allWordsAreComplete';
import markGrid from './markGrid';

const DELAY = 100;

export default function buildWordSquare(words) {
  words = uppity(words);
  let grid = [];
  const usedWords = {};
  const forest = buildForest(words);
  const timerFor = timer.bind(null, DELAY);

  return forest.trees().reduce((prom, tree) => (
    prom.then(result => (
      result.success ? result : build(0, 0, tree)
    ))
  ), failedPromise());


  function build(r, c, tree, node) {
    if (!node) node = tree.root();
    grid = markGrid(grid, r, c, node.value());

    return timerFor(
      buildPromise(r, c, tree, node)
    ).then(result => {
      if (result.success) return result;
      const l = largestCol(usedWords);
      const word = tree.getWordFromNode(node);
      if (l > 0 && c === l) {
        delete usedWords[word];
      }
      grid = markGrid(grid, r, c, null);
      return timerFor({ grid, success: false });
    });
  }

  function buildPromise(r, c, tree, node) {
    if (!validFromLeft(r) || !validFromTop(c)) {
      return failedPromise(grid);
    }
    if (!reachedEndOfRow(r, c, node)) {
      return buildCell(r, c + 1, tree, node);
    }
    usedWords[tree.getWordFromNode(node)] = true;
    return allWordsAreComplete(grid, forest) ?
      Promise.resolve({ grid, success: true }) : // finito
      buildRow(r + 1);
  }

  function buildCell(r, c, tree, node) {
    return node.children().reduce((prom, childNode) => (
      prom.then(result => (
        result.success ? result : timerFor(() => (
          build(r, c, tree, childNode)
        ))
      ))
    ), failedPromise());
  }

  function buildRow(r) {
    const lastNodeOfFirstColumn = forest.getLastNodeOfWord(
      getVertWord(grid, 0)
    );
    return lastNodeOfFirstColumn.children().reduce((prom, childNode) => (
      prom.then(result => (
        result.success ? result : timerFor(() => {
          const nextRowTree = forest.get(childNode.value());
          return nextRowTree ?
            build(r, 0, nextRowTree) :
            failedPromise(grid);
        })
      ))
    ), failedPromise());
  }

  function reachedEndOfRow(r, c, lastNodeOfRow) {
    return !lastNodeOfRow.hasChildren() && grid[r][c] && c >= largestCol(usedWords)
  }

  function validFromTop(c) {
    const vertWord = getVertWord(grid, c);
    return !usedWords[vertWord] && forest.has(vertWord);
  }

  function validFromLeft(r) {
    const horizWord = getHorizWord(grid, r);
    return !usedWords[horizWord] && forest.has(horizWord);
  }
}

import getHorizWord from './getHorizWord';
import getVertWord from './getVertWord';

export default function allWordsAreComplete(grid, forest) {
  return allRowsAreComplete(grid, forest) && allColumnsAreComplete(grid, forest);
}

function allRowsAreComplete(grid, forest) {
  return grid.every((row, i) => {
    const horizWord = getHorizWord(grid, i);
    return !forest.getLastNodeOfWord(horizWord).hasChildren();
  });
}

function allColumnsAreComplete(grid, forest) {
  return grid[0].every((letter, i) => {
    const vertWord = getVertWord(grid, i);
    return !forest.getLastNodeOfWord(vertWord).hasChildren();
  });
}

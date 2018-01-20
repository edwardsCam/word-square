export default function getHorizWord(grid, row) {
  return grid[row].reduce((horizWord, c) => {
    return c ? `${horizWord}${c}` : c;
  }, '');
}

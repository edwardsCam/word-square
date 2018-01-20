export default function getVertWord(grid, col) {
  let hitBlank = false;
  return grid.reduce((vertWord, row) => {
    const c = row[col];
    if (!c) hitBlank = true;
    return hitBlank ? vertWord : `${vertWord}${c}`;
  }, '');
}

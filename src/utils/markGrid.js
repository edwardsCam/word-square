import draw from './draw';

export default function markGrid(grid, r, c, val) {
  if (val == null) {
    if (c === 0) {
      // removing the first entry in a row; remove the entire row
      grid = grid.slice(0, r);
    } else {
      grid[r] = grid[r].slice(0, c);
    }
  } else {
    if (!grid[r]) {
      grid[r] = [];
    }
    grid[r][c] = val;
  }
  draw(grid);
  return grid;
}

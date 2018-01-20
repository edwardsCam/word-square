export default function toString(grid) {
  return grid.reduce((result, row) => {
    const str = typeof row === 'string' ? row : row.join('');
    return result ? `${result}\n${str}` : str;
  }, '');
}

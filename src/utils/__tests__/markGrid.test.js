import { expect } from 'chai';
import markGrid from '../markGrid';

// todo headless browser so we can get the `document` object.
describe('utils::markGrid', () => {
  xit('removes a value if i pass null', () => {
    const grid = [
      [ 'x', 'y' ]
    ];
    expect(
      markGrid(grid, 0, 1, null)
    ).to.eql([
      ['x']
    ]);
  });

  xit('removes the row if i remove the first element of that row', () => {
    const grid = [
      ['x']
    ];
    expect(
      markGrid(grid, 0, 0, null)
    ).to.eql([]);
  });

  xit('marks a new value', () => {
    const grid = [
      ['a']
    ];
    expect(markGrid(grid, 0, 0, 'z')).to.eql([
      ['z']
    ]);
  });

  xit("creates a row if it doesn't exist already", () => {
    expect(markGrid([], 0, 0, 'x')).to.eql([
      ['x']
    ]);
  });
});

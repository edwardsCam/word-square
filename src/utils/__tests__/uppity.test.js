import { expect } from 'chai';
import uppity from '../uppity';

describe('utils::uppity', () => {
  it('uppercases every word in the list', () => {
    expect(uppity([
      'asdf',
      'hAxOr',
      'YASS',
    ])).to.eql([
      'ASDF',
      'HAXOR',
      'YASS',
    ]);
  });
});

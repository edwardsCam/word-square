import { expect } from 'chai';
import buildWordSquare from '../buildWordSquare';

describe('utils::buildWordSquare', () => {

  // todo headless browser so we can get the `document` object.
  xit('builds the largest word square for a list of words', () => {
    const words = [
      'ab',
      'at',
      'to',
      'bo',
    ];
    return buildWordSquare(words).then(result => {

    })
  });
});

import buildWordSquare from './src/utils/buildWordSquare';
import prettyPrint from './src/utils/prettyPrint';
import words from './src/constants/words';

const SHUFFLE = true;

buildWordSquare(words, SHUFFLE).then(result => {
  prettyPrint(result);
  const element = document.getElementById('output');
  if (result.success) {
    element.style.border = '2px solid green';
  } else {
    element.innerHTML = 'No solution exists!';
    element.style.border = '2px solid red';
  }
});

import buildWordSquare from './src/utils/buildWordSquare';
import prettyPrint from './src/utils/prettyPrint';
import getWordList from './src/utils/getWordList'
import shuffle from 'lodash.shuffle';

document.getElementById('startBtn').onclick = () => {
  document.getElementById('output').style.borderColor = 'transparent'
  const size = document.querySelector('input[name="size"]:checked').value
  const words = shuffle(
    getWordList(size)
  )
  document.getElementById('inputWords').innerHTML = words.join('\n')
  buildWordSquare(words).then(result => {
    prettyPrint(result);
    const element = document.getElementById('output');
    if (result.success) {
      element.style.border = '2px solid green';
    } else {
      element.innerHTML = 'No solution exists!';
      element.style.border = '2px solid red';
    }
  });
}

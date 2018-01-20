import toString from './toString';

export default function draw(result) {
  document.getElementById('output').innerHTML = toString(result);
}

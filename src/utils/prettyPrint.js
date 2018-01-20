import toString from './toString';

export default function prettyPrint(result) {
  if (result.success) {
    console.log(toString(result.grid));
  } else {
    console.warn('No solution exists!');
  }
}

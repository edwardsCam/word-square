export default function largestCol(usedWords = {}) {
  return Object.keys(usedWords).reduce(
    (largest, word) => Math.max(word.length - 1, largest),
    0
  );
}

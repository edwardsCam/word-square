import {
  three,
  four,
  five,
  six,
  eight,
  threeDistractors,
  fourDistractors,
  fiveDistractors,
  sixDistractors,
  eightDistractors,
} from 'constants/words';

export default (size, withDistractors) => {
  switch (size) {
    case '3': return withDistractors ? [ ...three, ...threeDistractors] : three
    case '4': return withDistractors ? [ ...four, ...fourDistractors] : four
    case '5': return withDistractors ? [ ...five, ...fiveDistractors] : five
    case '6': return withDistractors ? [ ...six, ...sixDistractors] : six
    case '8': return withDistractors ? [ ...eight, ...eightDistractors] : eight
    default: return withDistractors ? [ ...four, ...fourDistractors] : four
  }
}

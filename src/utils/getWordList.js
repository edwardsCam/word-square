import {
  three,
  four,
  five,
  six,
  eight
} from '../constants/words';

export default size => {
  switch (size) {
    case '3': return three
    case '4': return four
    case '5': return five
    case '6': return six
    case '8': return eight
    default: return four
  }
}

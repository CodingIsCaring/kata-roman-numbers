const ROMAN_TABLE = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
};

export const convert = (cardinal: number): string => {

  if (cardinal > 5 && cardinal < 9) {
    let mod = cardinal % 5;
    let result: string = ROMAN_TABLE[5];

    while (mod > 0) {
      result += ROMAN_TABLE[1];
      mod --;
    }

    return result;
  }


  if (cardinal === 3) {
    return 'III';
  }

  if (cardinal === 2) {
    return 'II';
  }

  return ROMAN_TABLE[cardinal];
};

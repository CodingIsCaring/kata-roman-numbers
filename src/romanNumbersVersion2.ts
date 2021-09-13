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
  let result: string = '';
  const ROMAN_TABLE_KEYS = Object.keys(ROMAN_TABLE).reverse();

  ROMAN_TABLE_KEYS.forEach(value => {
    const key = Number(value);
    while (cardinal >= key) {
      cardinal -= key;
      result += ROMAN_TABLE[key];
    }
  });

  return result;
};

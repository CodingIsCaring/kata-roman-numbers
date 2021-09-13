import { convert } from '../src/romanNumbersVersion2';

describe('romanNumbers', () => {
  describe('particular', () => {
    it('should convert 1 to I', () => {
      const romanNumber = convert(1);

      expect(romanNumber).toBe('I');
    });

    it('should convert 5 to V', () => {
      const romanNumber = convert(5);

      expect(romanNumber).toBe('V');
    });

    it('should convert 10 to X', () => {
      const romanNumber = convert(10);

      expect(romanNumber).toBe('X');
    });

    it('should convert 50 to L', () => {
      const romanNumber = convert(50);

      expect(romanNumber).toBe('L');
    });

    it('should convert 100 to C', () => {
      const romanNumber = convert(100);

      expect(romanNumber).toBe('C');
    });

    it('should convert 500 to D', () => {
      const romanNumber = convert(500);

      expect(romanNumber).toBe('D');
    });

    it('should convert 1000 to M', () => {
      const romanNumber = convert(1000);

      expect(romanNumber).toBe('M');
    });
  });

  describe('basic cases', () => {
    it('should convert 2 to II', () => {
      const romanNumber = convert(2);

      expect(romanNumber).toBe('II');
    });

    it('should convert 3 to III', () => {
      const romanNumber = convert(3);

      expect(romanNumber).toBe('III');
    });

    it('should convert 6 to VI', () => {
      const romanNumber = convert(6);

      expect(romanNumber).toBe('VI');
    });

    it('should convert 7 to VII', () => {
      const romanNumber = convert(7);

      expect(romanNumber).toBe('VII');
    });

    it('should convert 8 to VIII', () => {
      const romanNumber = convert(8);

      expect(romanNumber).toBe('VIII');
    });

  });

  describe('trying to break the code', () => {
    it('should convert 602 to DCII', () => {
      const romanNumber = convert(602);

      expect(romanNumber).toBe('DCII');
    });

    it('should convert 357 to CCCLVII', () => {
      const romanNumber = convert(357);

      expect(romanNumber).toBe('CCCLVII');
    });

    it('should convert 484 to CDLXXXIV', () => {
      const romanNumber = convert(484);

      expect(romanNumber).toBe('CDLXXXIV');
    });

    it('should convert 639 to DCXXXIX', () => {
      const romanNumber = convert(639);

      expect(romanNumber).toBe('DCXXXIX');
    });

    it('should convert 944 to CMXLIV', () => {
      const romanNumber = convert(944);

      expect(romanNumber).toBe('CMXLIV');
    });
  });
});

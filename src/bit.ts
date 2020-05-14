export type Bit = 0 | 1;

/**
 * Convert bits to a decimal number. Assumes that the least significant digit is **_first_**.
 */
export function toDecimal(bits: Bit[]): number {
  // The least significant digits are first, which makes adding easier. However, we need the most
  // significant digits first to convert to a number;
  const reversed = bits.slice().reverse();
  const digits = reversed.join('');
  return parseInt(digits, 2);
}

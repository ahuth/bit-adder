export type Bit = 0 | 1;

export function and(a: Bit, b: Bit): Bit {
  if (a) {
    if (b) {
      return 1;
    }
  }
  return 0;
}

export function invert(a: Bit): Bit {
  if (a) { return 0; }
  return 1;
}

export function nand(a: Bit, b: Bit) {
  return invert(and(a, b));
}

export function or(a: Bit, b: Bit): Bit {
  if (a) { return 1; }
  if (b) { return 1; }
  return 0;
}

export function xor(a: Bit, b: Bit): Bit {
  return nand(
    nand(
      a,
      nand(a, b),
    ),
    nand(
      nand(a, b),
      b,
    ),
  );
}

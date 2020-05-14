export type Bit = boolean;

export function and(a: Bit, b: Bit): Bit {
  if (a) {
    if (b) {
      return true;
    }
  }
  return false;
}

export function invert(a: Bit): Bit {
  if (a) { return false; }
  return true;
}

export function nand(a: Bit, b: Bit) {
  return invert(and(a, b));
}

export function or(a: Bit, b: Bit): Bit {
  if (a) { return true; }
  if (b) { return true; }
  return false;
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

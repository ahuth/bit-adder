type Bit = boolean;

export function and(a: Bit, b: Bit): Bit {
  if (a) {
    if (b) {
      return true;
    }
  }
  return false;
}

export function or(a: Bit, b: Bit): Bit {
  if (a) { return true; }
  if (b) { return true; }
  return false;
}

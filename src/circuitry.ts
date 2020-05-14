type Bit = boolean;

export function or(a: Bit, b: Bit): Bit {
  if (a) { return true; }
  if (b) { return true; }
  return false;
}

import { Bit, and, or, xor } from './circuitry';

// Add 2 1-bit numbers together.
function halfAdder(augend: Bit, addend: Bit) {
  return {
    sum: xor(augend, addend),
    carry: and(augend, addend),
  };
}

// Add 3 1-bit numbers together, which allows us to add 2 1-bit numbers, plus any initial carry
// (coming from a previous addition step).
function fullAdder(a: Bit, b: Bit, carryIn: Bit) {
  const first = halfAdder(a, b);
  const second = halfAdder(carryIn, first.sum);
  return {
    sum: second.sum,
    carry: or(first.carry, second.carry),
  };
}

// Add two binary numbers together. The output will have one more bit than the inputs. For example,
// an 8-bit number can be between 0 and 255. Adding two of them together gives us a number between
// 0 and 510. To representt that sum, we need 9 bits.
export default function add(inputA: Bit[], inputB: Bit[]): Bit[] {
  const output: Bit[] = [];
  let carry = false;

  for (let index = 0; index < inputA.length; index ++) {
    const result = fullAdder(inputA[index], inputB[index], carry);
    output.push(result.sum);
    carry = result.carry;
  }

  output.push(carry);
  return output;
}

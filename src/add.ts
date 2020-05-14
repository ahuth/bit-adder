import { Bit, and, or, xor } from './circuitry';

function halfAdder(augend: Bit, addend: Bit) {
  return {
    sum: xor(augend, addend),
    carry: and(augend, addend),
  };
}

function fullAdder(a: Bit, b: Bit, carryIn: Bit) {
  const first = halfAdder(a, b);
  const second = halfAdder(carryIn, first.sum);
  return {
    sum: second.sum,
    carry: or(first.carry, second.carry),
  };
}

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

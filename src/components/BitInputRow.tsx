import React from 'react';
import { Bit, invert } from '../circuitry';

type Props = {
  bits: Bit[],
  cssCell?: string,
  heading: React.ReactNode,
  setBits: (setState: (bits: Bit[]) => Bit[]) => void,
}

export default function BitInputRow({ bits, cssCell, heading, setBits }: Props) {
  return (
    <tr>
      <th>{heading}</th>
      <td className={cssCell}></td>
      <td className={cssCell}><input checked={!!bits[7]} onChange={() => setBits(flipBit(7))} type="checkbox" /></td>
      <td className={cssCell}><input checked={!!bits[6]} onChange={() => setBits(flipBit(6))} type="checkbox" /></td>
      <td className={cssCell}><input checked={!!bits[5]} onChange={() => setBits(flipBit(5))} type="checkbox" /></td>
      <td className={cssCell}><input checked={!!bits[4]} onChange={() => setBits(flipBit(4))} type="checkbox" /></td>
      <td className={cssCell}><input checked={!!bits[3]} onChange={() => setBits(flipBit(3))} type="checkbox" /></td>
      <td className={cssCell}><input checked={!!bits[2]} onChange={() => setBits(flipBit(2))} type="checkbox" /></td>
      <td className={cssCell}><input checked={!!bits[1]} onChange={() => setBits(flipBit(1))} type="checkbox" /></td>
      <td className={cssCell}><input checked={!!bits[0]} onChange={() => setBits(flipBit(0))} type="checkbox" /></td>
      <td className={cssCell}>{parseBits(bits)}</td>
    </tr>
  );
}

function flipBit(index: number) {
  return function (bits: Bit[]) {
    const nextBits = [...bits];
    nextBits[index] = invert(nextBits[index]);
    return nextBits;
  };
}

function parseBits(bits: Bit[]): number {
  // The least significant digits are first, which makes adding easier. However, we need the most
  // significant digits first to convert to a number;
  const reversed = bits.slice().reverse();
  const digits = reversed.join('');
  return parseInt(digits, 2);
}

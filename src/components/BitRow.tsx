import React from 'react';
import range from 'lodash/range';
import { Bit } from '../circuitry';

type Props = {
  /**
   * Array of bit values (0 or 1) making up a binary number. The least significant digit should be **_first_**.
   */
  bits: Bit[],
  cssCell?: string,
  heading: React.ReactNode,
  numEmptyLeadingCells?: number,
  renderBit: (bit: Bit, index: number) => React.ReactNode,
}

export default function BitRow({ bits, cssCell, heading, numEmptyLeadingCells = 0, renderBit }: Props) {
  // The least significant digit is first, which makes adding easier. However, we display the bits
  // in the opposite order.
  const reversedBits = bits.slice().reverse();

  return (
    <tr>
      <th>{heading}</th>

      {range(numEmptyLeadingCells).map(function () {
        return <td className={cssCell}></td>;
      })}

      {reversedBits.map(function (bit, index) {
        // The bits array has the least significant digit first. However, we display them in the
        // reverse order, and must convert from the displayed index to the bits index here.
        const adjustedIndex = (bits.length - 1) - index;

        return <td className={cssCell}>{renderBit(bit, adjustedIndex)}</td>;
      })}

      <td className={cssCell}>{parseBits(bits)}</td>
    </tr>
  );
}

/**
 * Convert bits to a decimal number. Assumes that the least significant digit is **_first_**.
 */
function parseBits(bits: Bit[]): number {
  // The least significant digits are first, which makes adding easier. However, we need the most
  // significant digits first to convert to a number;
  const reversed = bits.slice().reverse();
  const digits = reversed.join('');
  return parseInt(digits, 2);
}

import React from 'react';
import range from 'lodash/range';
import { Bit, toDecimal } from '../bit';

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

      {range(numEmptyLeadingCells).map(function (num) {
        return <td className={cssCell} key={num}></td>;
      })}

      {reversedBits.map(function (bit, index) {
        // The bits array has the least significant digit first. However, we display them in the
        // reverse order, and must convert from the displayed index back to the bits index here.
        const adjustedIndex = (bits.length - 1) - index;

        return <td className={cssCell} key={index}>{renderBit(bit, adjustedIndex)}</td>;
      })}

      <td className={cssCell}>{toDecimal(bits)}</td>
    </tr>
  );
}

import React, { useState } from 'react';
import BitInputRow from './BitInputRow';
import add, { Bit } from '../add';
import styles from './App.module.css';

export default function App() {
  const [inputA, setInputA] = useState<Bit[]>([0, 0, 0, 0, 0, 0, 0, 0]);
  const [inputB, setInputB] = useState<Bit[]>([0, 0, 0, 0, 0, 0, 0, 0]);
  const output  = add(inputA, inputB);

  return (
    <table>
      <caption>Binary adding machine</caption>
      <thead>
        <tr>
          <th></th>
          <th>8</th>
          <th>7</th>
          <th>6</th>
          <th>5</th>
          <th>4</th>
          <th>3</th>
          <th>2</th>
          <th>1</th>
          <th>0</th>
          <th>Decimal representation</th>
        </tr>
      </thead>
      <tbody>
        <BitInputRow
          bits={inputA}
          cssCell={styles.bit}
          heading="Input A"
          numEmptyLeadingCells={1}
          setBits={setInputA}
        />
        <BitInputRow
          bits={inputB}
          cssCell={styles.bit}
          heading="Input B"
          numEmptyLeadingCells={1}
          setBits={setInputB}
        />
        <tr>
          <th>Sum</th>
          <td className={styles.bit}>{output[8] ? '✅' : null}</td>
          <td className={styles.bit}>{output[7] ? '✅' : null}</td>
          <td className={styles.bit}>{output[6] ? '✅' : null}</td>
          <td className={styles.bit}>{output[5] ? '✅' : null}</td>
          <td className={styles.bit}>{output[4] ? '✅' : null}</td>
          <td className={styles.bit}>{output[3] ? '✅' : null}</td>
          <td className={styles.bit}>{output[2] ? '✅' : null}</td>
          <td className={styles.bit}>{output[1] ? '✅' : null}</td>
          <td className={styles.bit}>{output[0] ? '✅' : null}</td>
          <td className={styles.bit}>{parseBits(output)}</td>
        </tr>
      </tbody>
    </table>
  );
}

function parseBits(bits: Bit[]): number {
  // The least significant digits are first, which makes adding easier. However, we need the most
  // significant digits first to convert to a number;
  const reversed = bits.slice().reverse();
  const digits = reversed.join('');
  return parseInt(digits, 2);
}

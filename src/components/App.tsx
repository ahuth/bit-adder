import React, { useState } from 'react';
import BitRow from './BitRow';
import add from '../add';
import styles from './App.module.css';
import { invert } from '../circuitry';
import type { Bit } from '../bit';

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
        <BitRow
          bits={inputA}
          cssCell={styles.bit}
          heading="Input A"
          numEmptyLeadingCells={1}
          renderBit={(bit, index) => <input checked={!!bit} onChange={() => setInputA(flipBit(index))} type="checkbox" />}
        />
        <BitRow
          bits={inputB}
          cssCell={styles.bit}
          heading="Input B"
          numEmptyLeadingCells={1}
          renderBit={(bit, index) => <input checked={!!bit} onChange={() => setInputB(flipBit(index))} type="checkbox" />}
        />
        <BitRow
          bits={output}
          cssCell={styles.bit}
          heading="Sum"
          numEmptyLeadingCells={0}
          renderBit={(bit) => !!bit ? '✅' : null}
        />
      </tbody>
    </table>
  );
}

function flipBit(index: number) {
  return function (bits: Bit[]) {
    const nextBits = [...bits];
    nextBits[index] = invert(nextBits[index]);
    return nextBits;
  };
}

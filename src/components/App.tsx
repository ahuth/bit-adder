import React, { useState } from 'react';
import add, { Bit } from '../add';
import { invert } from '../circuitry';
import styles from './App.module.css';

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

function toBoolean(bit: Bit): boolean {
  return !!bit;
}

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
        <tr>
          <th>Input A</th>
          <td className={styles.bit}></td>
          <td className={styles.bit}><input checked={toBoolean(inputA[7])} onChange={() => setInputA(flipBit(7))} type="checkbox" /></td>
          <td className={styles.bit}><input checked={toBoolean(inputA[6])} onChange={() => setInputA(flipBit(6))} type="checkbox" /></td>
          <td className={styles.bit}><input checked={toBoolean(inputA[5])} onChange={() => setInputA(flipBit(5))} type="checkbox" /></td>
          <td className={styles.bit}><input checked={toBoolean(inputA[4])} onChange={() => setInputA(flipBit(4))} type="checkbox" /></td>
          <td className={styles.bit}><input checked={toBoolean(inputA[3])} onChange={() => setInputA(flipBit(3))} type="checkbox" /></td>
          <td className={styles.bit}><input checked={toBoolean(inputA[2])} onChange={() => setInputA(flipBit(2))} type="checkbox" /></td>
          <td className={styles.bit}><input checked={toBoolean(inputA[1])} onChange={() => setInputA(flipBit(1))} type="checkbox" /></td>
          <td className={styles.bit}><input checked={toBoolean(inputA[0])} onChange={() => setInputA(flipBit(0))} type="checkbox" /></td>
          <td className={styles.bit}>{parseBits(inputA)}</td>
        </tr>
        <tr>
          <th>Input B</th>
          <td className={styles.bit}></td>
          <td className={styles.bit}><input checked={toBoolean(inputB[7])} onChange={() => setInputB(flipBit(7))} type="checkbox" /></td>
          <td className={styles.bit}><input checked={toBoolean(inputB[6])} onChange={() => setInputB(flipBit(6))} type="checkbox" /></td>
          <td className={styles.bit}><input checked={toBoolean(inputB[5])} onChange={() => setInputB(flipBit(5))} type="checkbox" /></td>
          <td className={styles.bit}><input checked={toBoolean(inputB[4])} onChange={() => setInputB(flipBit(4))} type="checkbox" /></td>
          <td className={styles.bit}><input checked={toBoolean(inputB[3])} onChange={() => setInputB(flipBit(3))} type="checkbox" /></td>
          <td className={styles.bit}><input checked={toBoolean(inputB[2])} onChange={() => setInputB(flipBit(2))} type="checkbox" /></td>
          <td className={styles.bit}><input checked={toBoolean(inputB[1])} onChange={() => setInputB(flipBit(1))} type="checkbox" /></td>
          <td className={styles.bit}><input checked={toBoolean(inputB[0])} onChange={() => setInputB(flipBit(0))} type="checkbox" /></td>
          <td className={styles.bit}>{parseBits(inputB)}</td>
        </tr>
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

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
    <form>
      <fieldset>
        <legend>Input A</legend>
        <div className={styles.switchContainer}>
          <label className={styles.bit}>A7 <input checked={toBoolean(inputA[7])} onChange={() => setInputA(flipBit(7))} type="checkbox" /></label>
          <label className={styles.bit}>A6 <input checked={toBoolean(inputA[6])} onChange={() => setInputA(flipBit(6))} type="checkbox" /></label>
          <label className={styles.bit}>A5 <input checked={toBoolean(inputA[5])} onChange={() => setInputA(flipBit(5))} type="checkbox" /></label>
          <label className={styles.bit}>A4 <input checked={toBoolean(inputA[4])} onChange={() => setInputA(flipBit(4))} type="checkbox" /></label>
          <label className={styles.bit}>A3 <input checked={toBoolean(inputA[3])} onChange={() => setInputA(flipBit(3))} type="checkbox" /></label>
          <label className={styles.bit}>A2 <input checked={toBoolean(inputA[2])} onChange={() => setInputA(flipBit(2))} type="checkbox" /></label>
          <label className={styles.bit}>A1 <input checked={toBoolean(inputA[1])} onChange={() => setInputA(flipBit(1))} type="checkbox" /></label>
          <label className={styles.bit}>A0 <input checked={toBoolean(inputA[0])} onChange={() => setInputA(flipBit(0))} type="checkbox" /></label>
          <span>(Equivalent to: {parseBits(inputA)})</span>
        </div>
      </fieldset>
      <fieldset>
        <legend>Input B</legend>
        <div className={styles.switchContainer}>
          <label className={styles.bit}>B7 <input checked={toBoolean(inputB[7])} onChange={() => setInputB(flipBit(7))} type="checkbox" /></label>
          <label className={styles.bit}>B6 <input checked={toBoolean(inputB[6])} onChange={() => setInputB(flipBit(6))} type="checkbox" /></label>
          <label className={styles.bit}>B5 <input checked={toBoolean(inputB[5])} onChange={() => setInputB(flipBit(5))} type="checkbox" /></label>
          <label className={styles.bit}>B4 <input checked={toBoolean(inputB[4])} onChange={() => setInputB(flipBit(4))} type="checkbox" /></label>
          <label className={styles.bit}>B3 <input checked={toBoolean(inputB[3])} onChange={() => setInputB(flipBit(3))} type="checkbox" /></label>
          <label className={styles.bit}>B2 <input checked={toBoolean(inputB[2])} onChange={() => setInputB(flipBit(2))} type="checkbox" /></label>
          <label className={styles.bit}>B1 <input checked={toBoolean(inputB[1])} onChange={() => setInputB(flipBit(1))} type="checkbox" /></label>
          <label className={styles.bit}>B0 <input checked={toBoolean(inputB[0])} onChange={() => setInputB(flipBit(0))} type="checkbox" /></label>
          <span>(Equivalent to: {parseBits(inputB)})</span>
        </div>
      </fieldset>
      <fieldset>
        <legend>Output</legend>
        <div className={styles.outputContainer}>
          <span className={styles.bit}>O8 {output[8] ? '✅' : null}</span>
          <span className={styles.bit}>O7 {output[7] ? '✅' : null}</span>
          <span className={styles.bit}>O6 {output[6] ? '✅' : null}</span>
          <span className={styles.bit}>O5 {output[5] ? '✅' : null}</span>
          <span className={styles.bit}>O4 {output[4] ? '✅' : null}</span>
          <span className={styles.bit}>O3 {output[3] ? '✅' : null}</span>
          <span className={styles.bit}>O2 {output[2] ? '✅' : null}</span>
          <span className={styles.bit}>O1 {output[1] ? '✅' : null}</span>
          <span className={styles.bit}>O0 {output[0] ? '✅' : null}</span>
          <span>(Equivalent to: {parseBits(output)})</span>
        </div>
      </fieldset>
    </form>
  );
}

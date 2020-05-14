import React, { useState } from 'react';
import * as Circuitry from '../circuitry';
import styles from './App.module.css';

function flipBit(index: number) {
  return function (bits: boolean[]) {
    const nextBits = [...bits];
    nextBits[index] = !nextBits[index];
    return nextBits;
  };
}

function orAll(inputA: boolean[], inputB: boolean[]) {
  return inputA.map(function (bitA, index) {
    const bitB = inputB[index];
    return Circuitry.or(bitA, bitB);
  });
}

export default function App() {
  const [inputA, setInputA] = useState([false, false, false, false, false, false, false, false]);
  const [inputB, setInputB] = useState([false, false, false, false, false, false, false, false]);
  const output  = orAll(inputA, inputB);

  return (
    <form>
      <fieldset>
        <legend>Input A</legend>
        <div className={styles.switchContainer}>
          <label className={styles.bit}>A7 <input checked={inputA[7]} onChange={() => setInputA(flipBit(7))} type="checkbox" /></label>
          <label className={styles.bit}>A6 <input checked={inputA[6]} onChange={() => setInputA(flipBit(6))} type="checkbox" /></label>
          <label className={styles.bit}>A5 <input checked={inputA[5]} onChange={() => setInputA(flipBit(5))} type="checkbox" /></label>
          <label className={styles.bit}>A4 <input checked={inputA[4]} onChange={() => setInputA(flipBit(4))} type="checkbox" /></label>
          <label className={styles.bit}>A3 <input checked={inputA[3]} onChange={() => setInputA(flipBit(3))} type="checkbox" /></label>
          <label className={styles.bit}>A2 <input checked={inputA[2]} onChange={() => setInputA(flipBit(2))} type="checkbox" /></label>
          <label className={styles.bit}>A1 <input checked={inputA[1]} onChange={() => setInputA(flipBit(1))} type="checkbox" /></label>
          <label className={styles.bit}>A0 <input checked={inputA[0]} onChange={() => setInputA(flipBit(0))} type="checkbox" /></label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Input B</legend>
        <div className={styles.switchContainer}>
          <label className={styles.bit}>B7 <input checked={inputB[7]} onChange={() => setInputB(flipBit(7))} type="checkbox" /></label>
          <label className={styles.bit}>B6 <input checked={inputB[6]} onChange={() => setInputB(flipBit(6))} type="checkbox" /></label>
          <label className={styles.bit}>B5 <input checked={inputB[5]} onChange={() => setInputB(flipBit(5))} type="checkbox" /></label>
          <label className={styles.bit}>B4 <input checked={inputB[4]} onChange={() => setInputB(flipBit(4))} type="checkbox" /></label>
          <label className={styles.bit}>B3 <input checked={inputB[3]} onChange={() => setInputB(flipBit(3))} type="checkbox" /></label>
          <label className={styles.bit}>B2 <input checked={inputB[2]} onChange={() => setInputB(flipBit(2))} type="checkbox" /></label>
          <label className={styles.bit}>B1 <input checked={inputB[1]} onChange={() => setInputB(flipBit(1))} type="checkbox" /></label>
          <label className={styles.bit}>B0 <input checked={inputB[0]} onChange={() => setInputB(flipBit(0))} type="checkbox" /></label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Output</legend>
        <div className={styles.outputContainer}>
          <span className={styles.bit}>O8 &nbsp;</span>
          <span className={styles.bit}>O7 {output[7] ? '✅' : null}</span>
          <span className={styles.bit}>O6 {output[6] ? '✅' : null}</span>
          <span className={styles.bit}>O5 {output[5] ? '✅' : null}</span>
          <span className={styles.bit}>O4 {output[4] ? '✅' : null}</span>
          <span className={styles.bit}>O3 {output[3] ? '✅' : null}</span>
          <span className={styles.bit}>O2 {output[2] ? '✅' : null}</span>
          <span className={styles.bit}>O1 {output[1] ? '✅' : null}</span>
          <span className={styles.bit}>O0 {output[0] ? '✅' : null}</span>
        </div>
      </fieldset>
    </form>
  );
}

import React, { useState } from 'react';
import styles from './App.module.css';

function flipBit(index: number) {
  return function (bits: boolean[]) {
    const nextBits = [...bits];
    nextBits[index] = !nextBits[index];
    return nextBits;
  };
}

export default function App() {
  const [inputA, setInputA] = useState([false, false, false, false, false, false, false, false]);
  const [inputB, setInputB] = useState([false, false, false, false, false, false, false, false]);

  return (
    <form>
      <fieldset>
        <legend>Input A</legend>
        <div className={styles.switchContainer}>
          <label>A7 <input checked={inputA[7]} onChange={() => setInputA(flipBit(7))} type="checkbox" /></label>
          <label>A6 <input checked={inputA[6]} onChange={() => setInputA(flipBit(6))} type="checkbox" /></label>
          <label>A5 <input checked={inputA[5]} onChange={() => setInputA(flipBit(5))} type="checkbox" /></label>
          <label>A4 <input checked={inputA[4]} onChange={() => setInputA(flipBit(4))} type="checkbox" /></label>
          <label>A3 <input checked={inputA[3]} onChange={() => setInputA(flipBit(3))} type="checkbox" /></label>
          <label>A2 <input checked={inputA[2]} onChange={() => setInputA(flipBit(2))} type="checkbox" /></label>
          <label>A1 <input checked={inputA[1]} onChange={() => setInputA(flipBit(1))} type="checkbox" /></label>
          <label>A0 <input checked={inputA[0]} onChange={() => setInputA(flipBit(0))} type="checkbox" /></label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Input B</legend>
        <div className={styles.switchContainer}>
          <label>B7 <input checked={inputB[7]} onChange={() => setInputB(flipBit(7))} type="checkbox" /></label>
          <label>B6 <input checked={inputB[6]} onChange={() => setInputB(flipBit(6))} type="checkbox" /></label>
          <label>B5 <input checked={inputB[5]} onChange={() => setInputB(flipBit(5))} type="checkbox" /></label>
          <label>B4 <input checked={inputB[4]} onChange={() => setInputB(flipBit(4))} type="checkbox" /></label>
          <label>B3 <input checked={inputB[3]} onChange={() => setInputB(flipBit(3))} type="checkbox" /></label>
          <label>B2 <input checked={inputB[2]} onChange={() => setInputB(flipBit(2))} type="checkbox" /></label>
          <label>B1 <input checked={inputB[1]} onChange={() => setInputB(flipBit(1))} type="checkbox" /></label>
          <label>B0 <input checked={inputB[0]} onChange={() => setInputB(flipBit(0))} type="checkbox" /></label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Output</legend>
        <div className={styles.outputContainer}>
          <label>O8 <input disabled type="checkbox" /></label>
          <label>O7 <input disabled type="checkbox" /></label>
          <label>O6 <input disabled type="checkbox" /></label>
          <label>O5 <input disabled type="checkbox" /></label>
          <label>O4 <input disabled type="checkbox" /></label>
          <label>O3 <input disabled type="checkbox" /></label>
          <label>O2 <input disabled type="checkbox" /></label>
          <label>O1 <input disabled type="checkbox" /></label>
          <label>O0 <input disabled type="checkbox" /></label>
        </div>
      </fieldset>
    </form>
  );
}

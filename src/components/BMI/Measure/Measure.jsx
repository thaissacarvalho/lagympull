import React from 'react';
import styles from '@/styles/BMI/Measure.module.css';
import SwitchButton from '../SwitchButton/SwitchButton';

export default function Measure() {
  return (
    <div className={styles.measure}>
      <h1 className={styles.measure__title}>Find your BMI</h1>
      <SwitchButton />
      <div className={styles.measure__metrics}>
        <div className={styles.metrics__sizes}>
          <label htmlFor="">HEIGHT</label>
          <input type="number" name="" id="" />
        </div>
        <div className={styles.metrics__sizes}>
          <label htmlFor="">WEIGHT</label>
          <input type="number" name="" id="" />
        </div>
      </div>
    </div>
  )
}

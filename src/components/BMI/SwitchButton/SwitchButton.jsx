import React, { useState } from 'react';
import styles from '@/styles/BMI/SwitchButton.module.css';

export default function SwitchButton() {

  const [toggled, setToggled] = useState(false);

  const handleClick = () => {
    setToggled(!toggled);
  }

  return (
    <div className={styles.switch}>
      <button
        className={`${styles.toggle__btn} ${toggled ? `${styles.toggled}` : ""}`}
        onClick={handleClick}>
        <div className={styles.btn__thumb}></div>
      </button>
      <p className={styles.switch__title}>{toggled ? 'Imperial' : "Metric"}</p>
    </div>
  )
}

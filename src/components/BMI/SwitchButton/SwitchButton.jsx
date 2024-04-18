import React from 'react';
import styles from '@/styles/Components/BMI/SwitchButton.module.css';

export default function SwitchButton({toggled, setToggled}) {

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

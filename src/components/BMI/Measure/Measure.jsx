import React, { useState } from 'react';
import styles from '@/styles/Components/BMI/Measure.module.css';
import SwitchButton from '../SwitchButton/SwitchButton';
import { Montserrat_Alternates } from 'next/font/google';
import Sizes from '../Sizes/Sizes';

const montAlternative = Montserrat_Alternates({
  subsets: ["latin"],
  weight: '500'
});

export default function Measure() {
  const [toggled, setToggled] = useState(false);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const calculateBMI = () => {
    let bmiValue;

    if (toggled) {
      bmiValue = (weight / (height * height)) * 703; 
    } else {
      bmiValue = weight / ((height / 100) * (height / 100));
    }

    setBMI(bmiValue.toFixed(2)); 
    setShowResult(true);
  };

  const handleCalculateClick = () => {
    calculateBMI();
  };

  const handleRestartClick = () => {
    setBMI(null);
    setShowResult(false);
    setHeight(0);
    setWeight(0);
  };

  return (
    <div className={styles.measure}>
      <div className={styles.measure__content}>
        <div className={styles.measure__container}>
          <div className={styles.measure__header}>
            {showResult ? (
              <button onClick={handleRestartClick} className={styles.measure__calculateAgain}>
                Calculate Again
              </button>
            ) : (
              <>
              <h1 className={`${styles.measure__title} ${montAlternative.className}`}>FIND YOUR BMI</h1>
              <SwitchButton toggled={toggled} setToggled={setToggled} />
              </>
            )}
          </div>
          {showResult ? (
            <p className={styles.measure__result}>
              Your BMI is: {bmi}
            </p>
          ) : (
            <Sizes setHeight={setHeight} setWeight={setWeight} />
          )}
        </div>
      </div>
      <button onClick={handleCalculateClick} className={styles.measure__button}>CALCULATE</button>
    </div>
  )
}

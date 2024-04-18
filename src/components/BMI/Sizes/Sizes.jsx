import React from 'react';
import styles from '@/styles/Components/BMI/Sizes.module.css';

export default function Sizes({ setHeight, setWeight }) {
    const handleHeightChange = (e) => {
        setHeight(parseFloat(e.target.value));
    };

    const handleWeightChange = (e) => {
        setWeight(parseFloat(e.target.value));
    };

    return (
        <div className={styles.sizes}>
            <div className={styles.sizes__itens}>
                <label className={styles.sizes__label}>HEIGHT</label>
                <input type="number" min={0} className={styles.sizes__input} id="height" placeholder='180cm or 70.86in' onChange={handleHeightChange}/>
            </div>
            <div className={styles.sizes__itens}>
                <label className={styles.sizes__label}>WEIGHT</label>
                <input type="number" min={0} className={styles.sizes__input} id="weight" placeholder='70kg or 154lbs' onChange={handleWeightChange}/>
            </div>
        </div>
    )
}

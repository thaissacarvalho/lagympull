import React from 'react';
import styles from '@/styles/BMI/BMI.module.css';
import Measure from './Measure/Measure';

export default function BMI() {
    return (
        <section id='BMI' className={styles.section__BMI}>
            <div className={styles.BMI__texts}>
                <h1 className={styles.texts__title}>Why I should calculate my BMI?</h1>

                <p className={styles.texts__text}>Second WOF(World Obesity Federation), the country Tonga, Samoa and United States are top 3 country can get
                    more people obese in the world.
                </p>

                <p className={styles.texts__text}>In addition, more 70% obesity people living in a poor country with conditions below alimentations, health and
                    education as Tonga and Samoa, two country that are Oceania. However, United of States are only consumers in mass but the country have a problem
                    with bad health with high prices of any services.
                </p>
            </div>

            <Measure/>
        </section>
    )
}

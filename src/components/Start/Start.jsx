import React from 'react';
import Image from 'next/image';
import bodyTransformPic from '@/images/body-transform.svg';
import { Montserrat_Alternates } from 'next/font/google';
import styles from '@/styles/Start/Start.module.css';

const montAlternative = Montserrat_Alternates({
  subsets: ["latin"],
  weight: '500'
});

export default function Start() {
  return (
    <section id="home" className={styles.section__home}>
      <div className={styles.home__texts}>
        <h2 className={`${montAlternative.className} ${styles.home__textIntroduction}`}>COME AND MAKE
          A DIFFERENCE
          WITH A<br />
          <span className={styles.home__textMark}>NATURAL TRANSFORMATION</span>
        </h2>

        <p id="BMI" className={styles.home__calculateBMI}>Calculate your BMI</p>
      </div>

      <Image src={bodyTransformPic} alt="Picture of body transformation" width={150} height={152} className={styles.home__image} />
    </section>
  )
}

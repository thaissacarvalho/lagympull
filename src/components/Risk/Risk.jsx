import React from 'react';
import Title from '../Title';
import Table from './Table/Table';
import styles from '@/styles/Components/Risk/Risk.module.css';

export default function Risk() {
  return (
    <section className={styles.risk}>
        <Title text="My BMI is a risk?"/>
        <p className={styles.risk__text}>If you calculate your BMI, now you need to understand about the types and why can be prejudicial for to health.</p>
        <p className={styles.risk__text}>Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. BMI has four categories: Underweight, Normal Weight, Overweight and Obesity.</p>
        <p className={styles.risk__text}>In all they, you have need control. See the table and your BMI score.</p>
        <div className={styles.risk__container}>
            <Table/>
            <div className={styles.risk__texts}>
                <p className={styles.risk__text}>How I can have a healthy life?</p>
                <p className={styles.risk__text}>You can eat a healthy diet, but you need search a specialized doctor, in specified doctor, a nutritionist and practice exercises to a better result. </p>
                <p className={styles.risk__text}>The dietician will help you with right diet and balanced, and with an inclusion of exercise you help even more balance your BMI.</p>
                <p className={styles.risk__text}>Search ”How I can be healthier” on Google and see different articles about this topic.</p>
            </div>
        </div>
    </section>
  )
}

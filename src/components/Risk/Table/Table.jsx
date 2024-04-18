import React from 'react';
import styles from '@/styles/Components/Risk/Table.module.css';

export default function TableBMI() {
    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.table__header}>
                    <th className={styles.table__title}>CATEGORIES</th>
                    <th className={styles.table__title}>SCORED</th>
                    <th className={styles.table__title}>TIPS</th>
                </tr>
            </thead>
            <tbody className={styles.table__body}>
                <tr className={styles.table__content}>
                    <td className={styles.table__categories}>Underweight</td>
                    <td className={styles.table__scored}>-18.5</td>
                    <td className={styles.table__tips}>Increase calories intake, get plenty of exercice and see a GP if you don&apos;t gain weight.</td>
                </tr>
                <tr className={styles.table__content}>
                    <td className={styles.table__categories}>Normal</td>
                    <td className={styles.table__scored}>18.5 - 24.99</td>
                    <td className={styles.table__tips}>Maintain healthy diet and maintain activity levels.</td>
                </tr>
                <tr className={styles.table__content}>
                    <td className={styles.table__categories}>Overweight</td>
                    <td className={styles.table__scored}>25 - 29.99</td>
                    <td className={styles.table__tips}>Review your calorie intake and review your activity level.</td>
                </tr>
                <tr className={styles.table__content}>
                    <td className={styles.table__categories}>Obese</td>
                    <td className={styles.table__scored}>+30</td>
                    <td className={styles.table__tips}>See a GP. You may be at risk of: Type 2 diabetes and heart disease.</td>
                </tr>
            </tbody>

        </table>
    )
}

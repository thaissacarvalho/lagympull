import React from 'react';
import Logo from '../../Logo';
import styles from '@/styles/Layout/Header/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
        <Logo/>

        <nav className={styles.nav}>
            <a href="#home" className={styles.link}>HOME</a>
            <a href="#bmi" className={styles.link}>BMI</a>
            <a href="#aboutus" className={styles.link}>ABOUT US</a>
        </nav>
    </header>
  )
}

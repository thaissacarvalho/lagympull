import React from 'react';
import Logo from '../../Logo';
import styles from '@/styles/Header/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
        <Logo/>

        <nav className={styles.nav}>
            <a href="#home" className={styles.nav__link}>HOME</a>
            <a href="#bmi" className={styles.nav__link}>BMI</a>
            <a href="#aboutus" className={styles.nav__link}>ABOUT US</a>
        </nav>
    </header>
  )
}

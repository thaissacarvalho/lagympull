import Logo from '@/components/Logo';
import React from 'react';
import styles from '@/styles/Layout/Footer/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <Logo/>

        <div className={styles.footer__infostyles}>
            <p className={styles.info__copyright}>All Rights Reserved © 2024</p>
            <p className={styles.info__createdBy}>Created By Thaissa Carvalho</p>
        </div>
    </footer>
  )
}

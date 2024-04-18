import React from 'react';
import styles from '@/styles/Components/Title.module.css';

export default function Title({text}) {
  return (
    <h1 className={styles.title}>{text}</h1>
  )
}

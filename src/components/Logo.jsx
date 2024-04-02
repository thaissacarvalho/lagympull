import { Montserrat_Alternates } from "next/font/google";
import styles from '@/styles/Logo/Logo.module.css';

const montserrat = Montserrat_Alternates({ 
    weight: "700",
    subsets: ["latin"],
});

export default function Logo() {
  return (
    <h1 className={`${styles.title} ${montserrat.className}`}>LA<span className={styles.titleMark}>GYM</span>PULL</h1>
  )
}

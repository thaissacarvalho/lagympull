import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Start from "@/components/Start/Start";
import BMI from "@/components/BMI/BMI";
import Risk from "@/components/Risk/Risk";
import AboutUs from "@/components/AboutUs/AboutUs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>LAGYMPULL</title>
        <meta name="description" content="Calculate your BMI." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/src/images/favicon.ico"/>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header/>
        <Start/>
        <BMI/>
        <Risk/>
        <AboutUs/>
        <Footer/>
      </main>
    </>
  );
}

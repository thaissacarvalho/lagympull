import React from 'react'
import Title from '../Title'
import styles from '@/styles/Components/AboutUs/AboutUS.module.css';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function AboutUs() {
    return (
        <section className={styles.aboutus} id="aboutus">
            <Title text="ABOUT US" />

            <div className={styles.aboutus__container}>
                <p className={styles.aboutus__text}>We warn about risks if you care about your health.</p>
                <p className={styles.aboutus__text}>BMI is an important concept for you to have a healthy life and avoid future diseases.</p>
                <p className={styles.aboutus__text}>The developer of this site was Thaissa Carvalho, and she accepts feedback on Linkedin, email or on the website about this specific project.</p>
            </div>

            <div className={styles.aboutus__socialmedia}>
                <p className={styles.aboutus__text}>Access the developer’s social networks:</p>

                <div className={styles.aboutus__iconsMedia}>
                    <EmailIcon href="mailto:thaissa-carvalho@outlook.com" className={styles.aboutus__icon}></EmailIcon>
                    <WebAssetIcon href="https://thaissacarvalho.vercel.app/" className={styles.aboutus__icon}></WebAssetIcon>
                    <LinkedInIcon href="https://www.linkedin.com/in/thaissacarvalho-ti/" className={styles.aboutus__icon}></LinkedInIcon>
                </div>
            </div>
        </section>
    )
}

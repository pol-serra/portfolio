import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pol</h1>
        <p className={styles.description}>
        I am an AI developer currently completing my Master's studies in Deep Learning for Multimedia Processing. Additionally, I possess expertise in Power Platform development, including Azure, Power BI, Power Apps and PowerAutomate.
        </p>
        <a href="mailtto:pol.serra.montes@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

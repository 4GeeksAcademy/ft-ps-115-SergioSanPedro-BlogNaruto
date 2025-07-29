import styles from "../pages/styles/pages/Home.module.css";
import React from "react";

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spark}></div>
      <div className={styles.spark}></div>
      <div className={styles.spark}></div>
      <div className={styles.spark}></div>

      <h1 className={styles.title}>NARUTO</h1>
      <p className={styles.subtitle}>Mundo Ninja</p>
      <p className={styles.description}>
        Descubre los secretos del universo ninja más épico. Conoce a los shinobi
        legendarios y vive aventuras increíbles en la Aldea Oculta de la Hoja.
      </p>
      <button className={styles.button}>Entrar al Dojo</button>
    </div>
  );
};

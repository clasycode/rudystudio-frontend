import React from "react";
import styles from "./Steps.module.scss";

export default function Card({ number, text, styled }) {
  return (
    <div className={styles.card}>
      <div style={{ ...styled }} className={styles.card__number}>
        {number}
      </div>
      <div className={styles.card__text}>{text}</div>
    </div>
  );
}

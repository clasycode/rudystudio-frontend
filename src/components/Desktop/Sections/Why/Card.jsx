import React from "react";
import styles from "./Card.module.scss";

export default function CardActive({ title, text }) {
  return (
    <div className={styles.card}>
      <div className={styles.card__nonactive}>
        <div className={styles.card__title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.card__text}>{text}</div>
      </div>
    </div>
  );
}

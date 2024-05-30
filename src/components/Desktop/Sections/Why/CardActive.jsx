import React, { useState } from "react";
import styles from "./Card.module.scss";
import plus from "../../../../assets/icon/plus.svg";

export default function CardActive({ title, text, img, textHover }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className={styles.card__active}>
          <div className={styles.card__image}>
            <img src={img} alt="" />
          </div>
          <div className={styles.card__textHover}>{textHover}</div>
        </div>
      ) : (
        <div className={styles.card__nonactive}>
          <div className={styles.card__title}>
            <h2>{title}</h2>
          </div>
          <div className={styles.card__text}>{text}</div>
          <div className={styles.card__icon}>
            <img src={plus} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

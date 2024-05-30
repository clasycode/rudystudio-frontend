import React from "react";
import styles from "./Text.module.scss";

export default function Text() {
  return (
    <div className={styles.text}>
      <div className={styles.text__row}>
        <div className={styles.text__title}>
          <h1>
            Пишем текста <br />
            которые открывают <br />
            двери к сердцам <br />
            вашей аудитории
          </h1>
        </div>
        <div className={`${styles.text__column} ${styles.column}`}>
          <div className={styles.column__item}>
            <div className={styles.column__text}>
              С нами обучение станет не только комфортным, но и максимально
              продуктивным для тебя
            </div>
            <div
              style={{ background: "#d6d4f0" }}
              className={styles.column__mark}
            >
              Плохо
            </div>
          </div>
          <div className={styles.column__item}>
            <div className={styles.column__text}>
              Учитесь ПДД в приложении или приходите в класс. Инструктор по
              вождению заберет из дома и привезет туда же, а 92% учеников сдают
              с первой или второй попытки
            </div>
            <div
              style={{ background: "#D0FA9B" }}
              className={styles.column__mark2}
            >
              Хорошо
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

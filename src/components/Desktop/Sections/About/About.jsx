import React from "react";
import styles from "./About.module.scss";
import Slider from "./Slider";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.about__row}>
        <div className={styles.about__columnOne}>
          <div className={styles.about__title}>
            Разработка и продвижение сайтов под вашу сферу
          </div>
          <div className={styles.about__spheres + " " + styles.spheres}>
            <ul className={styles.spheres__row}>
              <li className={styles.spheres__item}>Онлайн-продажи</li>
              <li className={styles.spheres__item}>Образование</li>
              <li className={styles.spheres__item}>Здравоохранение</li>
              <li className={styles.spheres__item}>Недвижимость</li>
            </ul>
            <ul className={styles.spheres__row}>
              <li className={styles.spheres__item}>Фитнес</li>
              <li className={styles.spheres__item}>Бренды одежды</li>
              <li className={styles.spheres__item}>Развлечения</li>
              <li className={styles.spheres__item}>Рестораны</li>
            </ul>
            <ul className={styles.spheres__row}>
              <li className={styles.spheres__item}>Строительство</li>
              <li className={styles.spheres__item}>IT cтартапы </li>
              <li className={styles.spheres__item}>Криптовалюта</li>
            </ul>
          </div>
        </div>
        <div className={styles.about__columnTwo}>
          <Slider />
        </div>
      </div>
    </div>
  );
}

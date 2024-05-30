import React from "react";
import styles from "./NotFoundMobile.module.scss";
import gears1 from "../assets/icon/gears1_404.svg";
import gears2 from "../assets/icon/gears2_404.svg";
import gears3 from "../assets/icon/gears3_404.svg";
import gears4 from "../assets/icon/gears4_404.svg";

export default function NotFoundMobile() {
  return (
    <div className={styles.not}>
      <div className={styles.not__container}>
        <div className={styles.not__flex}>
          <div className={styles.not__title}>404</div>
          <div className={styles.not__text}>
            Эта страничка потеряна( <br />
            но у нас есть другие
          </div>
          <div className={styles.not__button}>
            <a href="/">На главную</a>
          </div>
          <div className={styles.not__gear1}>
            <img src={gears1} alt="" />
          </div>
          <div className={styles.not__gear2}>
            <img src={gears2} alt="" />
          </div>
          <div className={styles.not__gear3}>
            <img src={gears3} alt="" />
          </div>
          <div className={styles.not__gear4}>
            <img src={gears4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

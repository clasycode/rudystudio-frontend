import React from "react";
import styles from "./SuccessDesktop.module.scss";
import pin from "../assets/icon/pin.svg";
import like from "../assets/icon/like.svg";
import gear from "../assets/icon/gear.svg";
import lightning from "../assets/icon/lightning.svg";

export default function SuccessDesktop() {
  function handleClick(link) {
    window.location.href = link;
  }

  return (
    <div className={styles.success}>
      <div className={styles.success__container}>
        <div className={styles.success__back}>
          <a href="/">На главную</a>
        </div>
        <div className={styles.success__flex}>
          <div className={styles.success__title}>
            Ваша заявка <br />
            уже у нас, <br />
            спасибо!
          </div>
          <div className={styles.success__text}>
            Отвечаем обычно в течении 20 минут. Если не <br />
            хотите ждать, свяжитесь с нами в мессенджере
          </div>
          <div className={styles.success__item1}>
            <img src={pin} alt="" />
          </div>
          <div className={styles.success__item2}>
            <img src={like} alt="" />
          </div>
          <div className={styles.success__item3}>
            <img src={gear} alt="" />
          </div>
          <div className={styles.success__item4}>
            <img src={lightning} alt="" />
          </div>
          <div className={styles.success__row}>
            <div
              className={styles.success__button}
              onClick={() => handleClick("https://t.me/Zakharssss")}
            >
              Telegram
            </div>
            <div
              className={styles.success__button}
              onClick={() => handleClick("https://wa.me/375299468676")}
            >
              Whatsapp
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./SuccessMobile.module.scss";
import telegram_white_mobile from "../assets/icon/telegram_white_mobile.svg";
import whatsapp_white_mobile from "../assets/icon/whatsapp_white_mobile.svg";
import gear_mobile from "../assets/icon/gear_mobile.svg";
import lightning_mobile from "../assets/icon/lightning_mobile.svg";

export default function SuccessMobile() {
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
            Отвечаем обычно в течении 20 <br />
            минут. Если не хотите ждать, <br />
            свяжитесь с нами в мессенджере
          </div>
          <div className={styles.success__item1}>
            <img src={gear_mobile} alt="" />
          </div>
          <div className={styles.success__item2}>
            <img src={lightning_mobile} alt="" />
          </div>
          <div className={styles.success__row}>
            <div
              className={styles.success__button}
              onClick={() => handleClick("https://t.me/Zakharssss")}
            >
              <img src={telegram_white_mobile} alt="" />
              Telegram
            </div>
            <div
              className={styles.success__button}
              onClick={() => handleClick("https://wa.me/375299468676")}
            >
              {" "}
              <img src={whatsapp_white_mobile} alt="" />
              Whatsapp
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

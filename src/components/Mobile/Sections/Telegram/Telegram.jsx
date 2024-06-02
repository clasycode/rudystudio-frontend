import React, { useState, useEffect } from "react";
import styles from "./Telegram.module.scss";
import tg_close from "../../../../assets/icon/tg_close.svg";

export default function Telegram({ onClose }) {
  function handleClick(link) {
    window.open(link, "_blank");
  }

  return (
    <div className={styles.tg}>
      <div className={styles.tg__row}>
        <div className={styles.tg__text}>Давайте дружить в Telegram</div>
        <div
          className={styles.tg__button}
          onClick={() => handleClick("https://t.me/RudyStudio")}
        >
          Давайте
        </div>
        <div className={styles.tg__close} onClick={onClose}>
          <img src={tg_close} alt="Close Icon" />
        </div>
      </div>
    </div>
  );
}

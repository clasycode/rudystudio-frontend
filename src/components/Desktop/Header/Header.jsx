import React, { useState } from "react";
import styles from "./Header.module.scss";
import telegram from "../../../assets/icon/telegram.svg";
import whatsapp from "../../../assets/icon/whatsapp.svg";
import telegram_hover from "../../../assets/icon/telegram_hover.svg";
import whatsapp_hover from "../../../assets/icon/whatsapp_hover.svg";
import ModalRequest from "../Modals/ModalRequest/ModalRequest";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  function handleClick(link) {
    window.open(link, "_blank");
  }

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <a href="/">RudyStudio</a>
      </div>
      <ul className={styles.header__links + " " + styles.links}>
        <li className={styles.links__item}>
          <a href="#projects">Проекты</a>
        </li>
        <li className={styles.links__item}>
          <a Стоимость href="#cost">
            Стоимость
          </a>
        </li>
        <li className={styles.links__item}>
          <a href="#dev-steps">Этапы разработки</a>
        </li>
        <li className={styles.links__item}>
          <a href="#contacts">Контакты</a>
        </li>
      </ul>
      <div className={styles.header__buttons}>
        <div className={styles.header__contacts + " " + styles.contacts}>
          <div
            className={styles.contacts__item}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? (
              <img
                src={telegram_hover}
                alt=""
                onClick={() => handleClick("https://t.me/Zakharssss")}
              />
            ) : (
              <img src={telegram} alt="" />
            )}
          </div>
          <div
            className={styles.contacts__item}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            {isHovered2 ? (
              <img
                src={whatsapp_hover}
                alt=""
                onClick={() => handleClick("https://wa.me/375299468676")}
              />
            ) : (
              <img src={whatsapp} alt="" />
            )}
          </div>
        </div>
        <div className={styles.header__button} onClick={openModal}>
          Заказать сайт
        </div>
      </div>
      <ModalRequest isOpen={modalOpen} onClose={closeModal} />
    </header>
  );
}

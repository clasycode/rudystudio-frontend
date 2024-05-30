import React, { useState } from "react";
import styles from "./Header.module.scss";
import ModalRequest from "../Modals/ModalRequest/ModalRequest";
import projects from "../../../assets/icon/projects.svg";
import cost from "../../../assets/icon/cost.svg";
import steps from "../../../assets/icon/steps.svg";
import telegram_blue from "../../../assets/icon/telegram_blue.svg";
import whatsapp_blue from "../../../assets/icon/whatsapp_blue.svg";

export default function Header() {
  function handleClick(link) {
    window.location.href = link;
  }

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__row}>
        <div className={styles.header__logo}>RudyStudio</div>
        <div className={styles.header__button} onClick={openModal}>
          Заказать сайт
        </div>
        <ModalRequest isOpen={modalOpen} onClose={closeModal} />
        <div className={styles.hamburger__wrapper}>
          <button className={styles.hamburger__button} onClick={toggleMenu}>
            <div className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
          </button>
          <div
            className={`${styles.hamburger__menu} ${isOpen ? styles.open : ""}`}
          >
            <div className={styles.menu__content}>
              <div className={styles.header__row}>
                <div className={styles.header__logo2}>RudyStudio</div>
                <div className={styles.header__button2} onClick={openModal}>
                  Заказать сайт
                </div>
              </div>
              <div className={`${styles.header__block} ${styles.block}`}>
                <div className={styles.block__nav}>
                  <ul>
                    <li onClick={toggleMenu}>
                      <img src={projects} alt="" />
                      <a href="#projects">Проекты</a>
                    </li>
                    <li onClick={toggleMenu}>
                      <img src={cost} alt="" />
                      <a href="#cost">Стоимость</a>
                    </li>
                    <li onClick={toggleMenu}>
                      <img src={steps} alt="" />
                      <a href="#dev-steps">Этапы разработки</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.block__content}>
                  <div className={styles.block__text}>
                    Напишите нам в мессенджере для обсуждения проекта
                  </div>
                  <div
                    className={`${styles.block__button3} ${styles.button3}`}
                    onTouchStart={() => handleClick("https://t.me/Zakharssss")}
                  >
                    <img src={telegram_blue} alt="" />
                    <span>Telegram</span>
                  </div>
                  <div
                    className={`${styles.block__button3} ${styles.button3}`}
                    onTouchStart={() =>
                      handleClick("https://wa.me/375299468676")
                    }
                  >
                    <img src={whatsapp_blue} alt="" />
                    <span>Whatsapp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

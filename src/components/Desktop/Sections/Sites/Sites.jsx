import React, { useState } from "react";
import styles from "./Sites.module.scss";
import landing from "../../../../assets/landing.webp";
import manypages from "../../../../assets/manypages.webp";
import store from "../../../../assets/store.webp";
import ModalRequest from "../../Modals/ModalRequest/ModalRequest";

export default function Sites() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal2 = () => {
    setModalOpen(true);
  };

  const closeModal2 = () => {
    setModalOpen(false);
  };

  const openModal3 = () => {
    setModalOpen(true);
  };

  const closeModal3 = () => {
    setModalOpen(false);
  };
  return (
    <div className={styles.sites}>
      <div className={styles.sites__title}>
        <h1>
          Стоимость сайтов под <br />
          конкретную задачу
        </h1>
      </div>
      <div className={styles.sites__row}>
        <div
          style={{ background: "#F5F5F5" }}
          className={styles.sites__column + " " + styles.column}
        >
          <div className={styles.column__image}>
            <img src={landing} alt="" />
          </div>
          <div className={styles.column__title}>
            <h2>Лендинг на Tilda</h2>
          </div>
          <div className={styles.column__text + " " + styles.text}>
            Если требуется обильный поток запросов из рекламных кампаний или
            социальных сетей для определенной услуги
          </div>
          <div className={styles.column__row}>
            <div
              style={{ background: "#E7E7FF" }}
              className={styles.column__plank}
            >
              Срок 5-7 дней
            </div>
            <div
              style={{ background: "#D0FA9B" }}
              className={styles.column__plank}
            >
              Уникальный дизайн на ZeroBlock
            </div>
            <div
              style={{ background: "#D6D4F0" }}
              className={styles.column__plank}
            >
              Продвижение по SEO 1-2 запроса
            </div>
          </div>
          <div className={styles.column__row2}>
            <div className={styles.column__cost + " " + styles.cost}>
              от 280$
            </div>
            <div
              onClick={openModal}
              className={styles.column__button + " " + styles.button}
            >
              Заказать
            </div>
            <ModalRequest isOpen={modalOpen} onClose={closeModal} />
          </div>
        </div>
        <div
          style={{ background: "#E8EBFC" }}
          className={styles.sites__column + " " + styles.column}
        >
          <div className={styles.column__image}>
            <img src={manypages} alt="" />
          </div>
          <div className={styles.column__title}>
            <h2>Многостраничный сайт</h2>
          </div>
          <div
            style={{ width: "424px" }}
            className={styles.column__text + " " + styles.text}
          >
            Для предоставления информации о компании ее товарах или услугах.
            Заявки из рекламы и топ-10 в поиске по всем услугам
          </div>
          <div className={styles.column__row}>
            <div
              style={{ background: "#FFFFFF" }}
              className={styles.column__plank}
            >
              Срок 15-20 дней
            </div>
            <div
              style={{ background: "#D6D4F0" }}
              className={styles.column__plank}
            >
              Уникальный дизайн и верстка на React
            </div>
            <div
              style={{ background: "#D0FA9B" }}
              className={styles.column__plank}
            >
              Продвижение по SEO в топ 10 выдачи
            </div>
          </div>
          <div className={styles.column__row2}>
            <div className={styles.column__cost + " " + styles.cost}>
              от 460$
            </div>
            <div
              onClick={openModal2}
              className={styles.column__button + " " + styles.button}
            >
              Заказать
            </div>
            <ModalRequest isOpen={modalOpen2} onClose={closeModal2} />
          </div>
        </div>
      </div>
      <div
        style={{ background: "#E3E8F9" }}
        className={styles.sites__block + " " + styles.block}
      >
        <div className={styles.block__row}>
          <div className={styles.block__column}>
            <div className={styles.block__title}>
              <h2>Сервис, магазин, PR-акция</h2>
            </div>
            <div className={styles.block__text + " " + styles.text}>
              Разработка сложных проектов с UX-прототипами, исследованиями,
              собственными CMS/CRM системами, включая работу с бекендом и базами
              данных
            </div>
            <div className={styles.block__row2}>
              <div
                style={{ background: "#FFFFFF" }}
                className={styles.block__plank}
              >
                Срок 30-45 дней
              </div>
              <div
                style={{ background: "#D6D4F0" }}
                className={styles.block__plank}
              >
                Продвижение SEO 1-2 запроса
              </div>
              <div
                style={{ background: "#D0FA9B" }}
                className={styles.block__plank}
              >
                Уникальный дизайн разработка на стеке PERN
              </div>
            </div>
            <div className={styles.block__cost + " " + styles.cost}>
              от 600$
            </div>
          </div>
          <div className={styles.block__image}>
            <img src={store} alt="" />
          </div>
          <div
            onClick={openModal3}
            className={styles.block__button + " " + styles.button}
          >
            Заказать
          </div>
          <ModalRequest isOpen={modalOpen3} onClose={closeModal3} />
        </div>
      </div>
    </div>
  );
}

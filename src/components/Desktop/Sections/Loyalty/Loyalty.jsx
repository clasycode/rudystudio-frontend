import React, { useState } from "react";
import styles from "./Loyalty.module.scss";
import analytics from "../../../../assets/analytics.webp";
import ModalRequest from "../../Modals/ModalRequest/ModalRequest";

export default function Loyalty() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className={styles.loyalty}>
      <div className={styles.loyalty__row}>
        <div className={styles.loyalty__column}>
          <div className={styles.loyalty__title}>
            <h2>
              Постоянная забота о <br />
              вашем проекте
            </h2>
          </div>
          <div className={styles.loyalty__text}>
            <span>
              Ваш сайт - это марафонец, преодолевающий все <br />
              препятствия на пути к рекордным продажам
            </span>
          </div>
          <div className={styles.loyalty__row2}>
            <div
              style={{ background: "#D0FA9B" }}
              className={styles.loyalty__plank}
            >
              Анализ пользовательского поведения
            </div>
            <div
              style={{ background: "#D6D4F0" }}
              className={styles.loyalty__plank}
            >
              Напишем ТЗ на доработки
            </div>
            <div
              style={{ background: "#E7E7FF" }}
              className={styles.loyalty__plank}
            >
              Добавим/удалим блоки, страницы
            </div>
          </div>
          <div className={styles.loyalty__button} onClick={openModal}>
            Оставить заявку
          </div>
          <ModalRequest isOpen={modalOpen} onClose={closeModal} />
        </div>
        <div className={styles.loyalty__image}>
          <img src={analytics} alt="" />
        </div>
      </div>
    </div>
  );
}

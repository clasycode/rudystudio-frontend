import React, { useState } from "react";
import styles from "./Draw.module.scss";
import draw_mobile from "../../../../assets/draw_mobile.webp";
import ModalFree from "../../Modals/ModalFree/ModalFree";

export default function Draw() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className={styles.draw}>
      <div className={styles.draw__row}>
        <div className={styles.draw__column}>
          <div className={styles.draw__title}>
            <h1>
              Нарисуем дизайн <br />
              первого экрана сайта <br />
              бесплатно*
            </h1>
          </div>
        </div>
        <div className={styles.draw__image}>
          <img src={draw_mobile} alt="" />
        </div>
        <div className={styles.draw__button} onClick={openModal}>
          Оставить заявку
        </div>
        <ModalFree isOpen={modalOpen} onClose={closeModal} />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import styles from "./Result.module.scss";
import video1_mobile from "../../../../assets/video1_mobile.webp";
import video2_mobile from "../../../../assets/video2_mobile.webp";
import play_mobile from "../../../../assets/icon/play_mobile.svg";
import play_mobile_hover from "../../../../assets/icon/play_mobile_hover.svg";
import asai from "../../../../assets/video/asai.mp4";
import laforme from "../../../../assets/video/laforme.mp4";
import ModalVideo from "../../Modals/ModalVideo/ModalVideo";

export default function Result() {
  const [isHovered, setIsHovered] = useState(null);
  const [isHovered2, setIsHovered2] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [modalOpen2, setModalOpen2] = useState(false);
  const openModal2 = () => {
    setModalOpen2(true);
  };

  const closeModal2 = () => {
    setModalOpen2(false);
  };

  return (
    <div className={styles.result}>
      <div className={styles.result__row}>
        <div className={styles.result__column1}>
          <div className={styles.result__title}>
            <h2>
              Ваш успех - наша <br />
              цель: истории наших <br />
              друзей
            </h2>
          </div>
          <div className={styles.result__text}>
            Отзывы наших клиентов - это не <br />
            просто слова, это истории <br />
            успешного сотрудничества и <br />
            дружбы
          </div>
        </div>
        <div className={styles.result__column2}>
          <div className={styles.result__row2}>
            <div className={styles.result__item} onClick={openModal}>
              <img src={video1_mobile} alt="" />
              <div className={styles.result__play}>
                {isHovered ? (
                  <img src={play_mobile_hover} alt="" />
                ) : (
                  <img src={play_mobile} alt="" />
                )}
              </div>
              <ModalVideo
                isOpen={modalOpen}
                onClose={closeModal}
                video={laforme}
              />
            </div>
            <div className={styles.result__item} onClick={openModal2}>
              <img src={video2_mobile} alt="" />
              <div className={styles.result__play}>
                {isHovered2 ? (
                  <img src={play_mobile_hover} alt="" />
                ) : (
                  <img src={play_mobile} alt="" />
                )}
              </div>
              <ModalVideo
                isOpen={modalOpen2}
                onClose={closeModal2}
                video={asai}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

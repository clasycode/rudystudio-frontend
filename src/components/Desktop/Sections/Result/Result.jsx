import React, { useState } from "react";
import styles from "./Result.module.scss";
import video1 from "../../../../assets/video1.webp";
import video2 from "../../../../assets/video2.webp";
import play from "../../../../assets/icon/play.svg";
import play_hover from "../../../../assets/icon/play_hover.svg";
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
              Ваш успех - наша цель: <br />
              истории наших друзей
            </h2>
          </div>
          <div className={styles.result__text}>
            Отзывы наших клиентов - это не просто слова, <br />
            это истории успешного сотрудничества и дружбы
          </div>
        </div>
        <div className={styles.result__column2}>
          <div className={styles.result__row2}>
            <div
              className={styles.result__item}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={openModal}
            >
              <div className={styles.result__video}>
                <img src={video1} alt="" />
                <div className={styles.result__play}>
                  {isHovered ? (
                    <img src={play_hover} alt="" />
                  ) : (
                    <img src={play} alt="" />
                  )}
                </div>
              </div>
              <ModalVideo
                isOpen={modalOpen}
                onClose={closeModal}
                video={asai}
              />
            </div>
            <div
              className={styles.result__item}
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
              onClick={openModal2}
            >
              <div className={styles.result__video}>
                <img src={video2} alt="" />
                <div className={styles.result__play}>
                  {isHovered2 ? (
                    <img src={play_hover} alt="" />
                  ) : (
                    <img src={play} alt="" />
                  )}
                </div>
                <ModalVideo
                  isOpen={modalOpen2}
                  onClose={closeModal2}
                  video={laforme}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

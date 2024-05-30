import React, { useState, useEffect } from "react";
import styles from "./Last.module.scss";
import { Link } from "react-router-dom";
import { fetchCases } from "../../../../http/caseAPI";
import arrowLeft from "../../../../assets/icon/arrowLeft.svg";
import arrowRight from "../../../../assets/icon/arrowRight.svg";
import arrow from "../../../../assets/icon/arrow.svg";
import arrowHover from "../../../../assets/icon/arrow_hover.svg";
import ModalRequest from "../../../Desktop/Modals/ModalRequest/ModalRequest";

export default function Last() {
  const [cases, setCases] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getCases();
  }, []);

  const getCases = async () => {
    try {
      const response = await fetchCases();
      if (response && Array.isArray(response.rows)) {
        setCases(response.rows);
      } else {
        console.error("Полученные данные не являются массивом:", response.data);
      }
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  const nextCase = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === cases.length - 2 ? 0 : prevIndex + 1
    );
  };

  const prevCase = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cases.length - 2 : prevIndex - 1
    );
  };

  const baseUrl = import.meta.env.VITE_API_URL;

  return (
    <div className={styles.last}>
      <div className={styles.last__title}>
        <h1>Последние проекты</h1>
      </div>
      <div className={styles.carousel}>
        <div className={styles.casesContainer}>
          {cases.length > 0 && (
            <>
              <div className={styles.case}>
                <div className={styles.cases__column}>
                  <div
                    className={`${styles.column} ${
                      isHovered ? styles.hovered : ""
                    }`}
                  >
                    <div className={styles.column__img}>
                      {cases[activeIndex].caseImg && (
                        <Link to={`/cases/${cases[activeIndex].caseLink}`}>
                          <img
                            src={`${baseUrl}static/${cases[activeIndex].caseImg}`}
                            alt={cases[activeIndex].titleDesktop}
                          />
                        </Link>
                      )}
                    </div>
                    <div className={styles.column__title}>
                      <Link to={`/cases/${cases[activeIndex].caseLink}`}>
                        {cases[activeIndex].titleDesktop}
                      </Link>
                    </div>
                    <div className={styles.column__row}>
                      <div
                        className={styles.column__sphere}
                        style={{ background: cases[activeIndex].sphere_color }}
                      >
                        {cases[activeIndex].sphere}
                      </div>
                      <div
                        className={styles.column__button}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        <Link to={`/cases/${cases[activeIndex].caseLink}`}>
                          <img src={isHovered ? arrowHover : arrow} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.case}>
                <div className={styles.cases__column}>
                  <div
                    className={`${styles.column} ${
                      isHovered2 ? styles.hovered : ""
                    }`}
                  >
                    <div className={styles.column__img}>
                      {cases[activeIndex + 1].caseImg && (
                        <Link
                          to={`/cases/${cases[activeIndex + 1].caseLink}`}
                          className={styles.caseLink}
                        >
                          <img
                            src={`${baseUrl}static/${
                              cases[activeIndex + 1].caseImg
                            }`}
                            alt={cases[activeIndex + 1].titleDesktop}
                          />
                        </Link>
                      )}
                    </div>
                    <div className={styles.column__title}>
                      <Link
                        to={`/cases/${cases[activeIndex + 1].caseLink}`}
                        className={styles.caseLink}
                      >
                        {cases[activeIndex + 1].titleDesktop}
                      </Link>
                    </div>
                    <div className={styles.column__row}>
                      <div
                        className={styles.column__sphere}
                        style={{
                          background: cases[activeIndex + 1].sphere_color,
                        }}
                      >
                        {cases[activeIndex + 1].sphere}
                      </div>
                      <div
                        className={styles.column__button}
                        onMouseEnter={() => setIsHovered2(true)}
                        onMouseLeave={() => setIsHovered2(false)}
                      >
                        <Link
                          to={`/cases/${cases[activeIndex + 1].caseLink}`}
                          className={styles.caseLink}
                        >
                          <img src={isHovered2 ? arrowHover : arrow} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className={styles.bottomButtons}>
        {/* Открытие модального окна по клику на кнопку "Оставить заявку" */}
        <div
          className={styles.requestButton}
          onClick={() => setIsModalOpen(true)}
        >
          Оставить заявку
        </div>
        <div className={styles.arrows}>
          <div className={styles.arrowRight} onClick={nextCase}>
            <img src={arrowRight} alt="Right Arrow" />
          </div>
          <div className={styles.arrowLeft} onClick={prevCase}>
            <img src={arrowLeft} alt="Left Arrow" />
          </div>
        </div>
      </div>
      {/* Рендер модального окна */}
      <ModalRequest
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

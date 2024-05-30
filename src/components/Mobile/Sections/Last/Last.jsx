import React, { useState, useEffect } from "react";
import styles from "./Last.module.scss";
import { Link } from "react-router-dom";
import { fetchCases } from "../../../../http/caseAPI";
import arrow from "../../../../assets/icon/arrow.svg";
import arrowHover from "../../../../assets/icon/arrow_hover.svg";

export default function Last() {
  const [cases, setCases] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

  const baseUrl = import.meta.env.VITE_API_URL;

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setIsSwiping(false); // Начало касания, свайп еще не начался
  };

  const handleTouchMove = (e) => {
    setIsSwiping(true); // Пользователь начал движение, значит это свайп
  };

  const handleTouchEnd = (e) => {
    if (isSwiping) {
      const touchEndX = e.changedTouches[0].clientX;
      const deltaX = touchEndX - touchStartX;

      if (deltaX > 50 && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      } else if (deltaX < -50 && activeIndex < cases.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    }
    setIsSwiping(false); // Свайп завершен
  };

  return (
    <div
      className={styles.last}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.last__title}>
        <h1>Последние проекты</h1>
      </div>
      <div className={styles.carousel}>
        <div className={styles.casesContainer}>
          {cases.length > 0 && (
            <div className={styles.case}>
              <div className={styles.cases__column}>
                <div
                  className={`${styles.column} ${
                    isHovered ? styles.hovered : ""
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className={styles.column__img}>
                    {cases[activeIndex].caseImg && (
                      <Link
                        to={`/cases/${cases[activeIndex].caseLink}`}
                        onClick={(e) => isSwiping && e.preventDefault()}
                      >
                        <img
                          src={`${baseUrl}static/${cases[activeIndex].caseImg}`}
                          alt={cases[activeIndex].titleMobile}
                        />
                      </Link>
                    )}
                  </div>
                  <div className={styles.column__title}>
                    <Link
                      to={`/cases/${cases[activeIndex].caseLink}`}
                      onClick={(e) => isSwiping && e.preventDefault()}
                    >
                      {cases[activeIndex].titleMobile}
                    </Link>
                  </div>
                  <div className={styles.column__row}>
                    <div
                      className={styles.column__sphere}
                      style={{ background: cases[activeIndex].sphere_color }}
                    >
                      {cases[activeIndex].sphere}
                    </div>
                    <div className={styles.column__button}>
                      <Link
                        to={`/cases/${cases[activeIndex].caseLink}`}
                        onClick={(e) => isSwiping && e.preventDefault()}
                      >
                        <img src={isHovered ? arrowHover : arrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.bottomButtons}>
        <div className={styles.dots}>
          {cases.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${
                index === activeIndex ? styles.activeDot : ""
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

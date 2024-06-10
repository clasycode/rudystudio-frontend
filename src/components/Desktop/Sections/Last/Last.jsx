import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import styles from "./Last.module.scss";
import { Link } from "react-router-dom";
import { fetchCases } from "../../../../http/caseAPI";
import arrowLeft from "../../../../assets/icon/arrowLeft.svg";
import arrowRight from "../../../../assets/icon/arrowRight.svg";
import arrow from "../../../../assets/icon/arrow.svg";
import arrowHover from "../../../../assets/icon/arrow_hover.svg";
import ModalRequest from "../../../Desktop/Modals/ModalRequest/ModalRequest";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Last() {
  const [cases, setCases] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    getCases();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setEqualHeight();
    }, 500); // Add delay to ensure all images are loaded
  }, [cases]);

  const getCases = async () => {
    try {
      const response = await fetchCases();
      if (response && Array.isArray(response.rows)) {
        setCases(response.rows.reverse());
      } else {
        console.error("Полученные данные не являются массивом:", response.data);
      }
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  const baseUrl = import.meta.env.VITE_API_URL;

  const setEqualHeight = () => {
    const columns = document.querySelectorAll(`.${styles.case}`);
    let maxHeight = 0;

    columns.forEach((col) => {
      col.style.height = "auto"; // Reset height
      const height = col.offsetHeight;
      if (height > maxHeight) {
        maxHeight = height;
      }
    });

    columns.forEach((col) => {
      col.style.height = `${maxHeight}px`;
    });
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 0.5,
  };

  return (
    <div className={styles.last}>
      <div className={styles.last__title}>
        <h1>Последние проекты</h1>
      </div>
      <div className={styles.casesContainer}>
        {cases.length > 0 && (
          <Slider ref={sliderRef} {...settings}>
            {cases.map((caseItem, index) => (
              <div key={index} className={styles.case}>
                <div className={styles.cases__column}>
                  <div
                    className={`${styles.column} ${
                      hoveredIndex === index ? styles.hovered : ""
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className={styles.column__img}>
                      {caseItem.caseImg && (
                        <Link to={`/cases/${caseItem.caseLink}`}>
                          <img
                            src={`${baseUrl}static/${caseItem.caseImg}`}
                            alt={caseItem.titleDesktop}
                          />
                        </Link>
                      )}
                    </div>
                    <div className={styles.column__title}>
                      <Link to={`/cases/${caseItem.caseLink}`}>
                        {caseItem.titleDesktop}
                      </Link>
                    </div>
                    <div className={styles.column__row}>
                      <div
                        className={styles.column__sphere}
                        style={{ background: caseItem.sphere_color }}
                      >
                        {caseItem.sphere}
                      </div>
                      <div className={styles.column__button}>
                        <Link to={`/cases/${caseItem.caseLink}`}>
                          <img
                            src={hoveredIndex === index ? arrowHover : arrow}
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
      <div className={styles.bottomButtons}>
        <div
          className={styles.requestButton}
          onClick={() => setIsModalOpen(true)}
        >
          Оставить заявку
        </div>
        <div className={styles.arrows}>
          <div
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={() => sliderRef.current.slickPrev()}
          >
            <img src={arrowLeft} alt="Previous" />
          </div>
          <div
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={() => sliderRef.current.slickNext()}
          >
            <img src={arrowRight} alt="Next" />
          </div>
        </div>
      </div>
      <ModalRequest
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

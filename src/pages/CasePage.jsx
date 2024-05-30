import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCase } from "../http/caseAPI";
import styles from "./CasePage.module.scss";
import HeaderMobile from "../components/Mobile/Header/Header";
import HeaderDesktop from "../components/Desktop/Header/Header";
import FooterMobile from "../components/Mobile/Footer/Footer";
import FooterDesktop from "../components/Desktop/Footer/Footer";

const CasePage = () => {
  const { caseLink } = useParams();
  const [siteCase, setSiteCase] = useState(null);

  const isMobile = window.innerWidth <= 999;

  function handleClick(link) {
    window.open(link, "_blank");
  }

  useEffect(() => {
    getCase();
  }, [caseLink]);

  const getCase = async () => {
    try {
      const data = await fetchCase(caseLink);
      setSiteCase(data);
    } catch (error) {
      console.error("Ошибка при получении кейса:", error);
    }
  };

  if (!siteCase) {
    return <div>Загрузка...</div>;
  }

  const baseUrl = import.meta.env.VITE_API_URL;
  return (
    <>
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
      <div className={styles.case}>
        <div className={styles.container}>
          <div className={styles.case__title}>
            {isMobile ? siteCase.titleMobile : siteCase.titleDesktop}
          </div>
          <div
            className={styles.case__button}
            onClick={() => handleClick(siteCase.siteLink)}
          >
            Перейти на сайт
          </div>
          <div className={styles.case__img}>
            {siteCase.siteImg && (
              <img
                src={`${baseUrl}static/${siteCase.siteImg}`}
                alt="Site Image"
              />
            )}
          </div>
          <div className={styles.case__row}>
            <div
              className={`${styles.case__column} ${styles.column}`}
              style={{
                background: "#F5F5F5",
              }}
            >
              <div className={styles.column__title}>О чем</div>
              <div className={styles.column__text}>{siteCase.what}</div>
            </div>
            <div
              className={`${styles.case__column} ${styles.column}`}
              style={{
                background: "#F8F8F8",
              }}
            >
              <div className={styles.column__title}>Проблема</div>
              <div className={styles.column__text}>{siteCase.problem}</div>
            </div>
            <div
              className={`${styles.case__column} ${styles.column}`}
              style={{
                background: "#FAFAFA",
              }}
            >
              <div className={styles.column__title}>Цель</div>
              <div className={styles.column__text}>{siteCase.aim}</div>
            </div>
          </div>
          {siteCase.sections &&
            siteCase.sections.map((section, index) => (
              <div
                className={`${styles.case__section} ${styles.section}`}
                key={index}
              >
                <div className={styles.section__row}>
                  <div className={styles.section__title}>{section.title}</div>
                  <div className={styles.section__text}>{section.text}</div>
                </div>
                {section.img && (
                  <div className={styles.section__img}>
                    <img
                      src={`${baseUrl}static/${section.img}`}
                      alt={`Section ${index + 1} Image`}
                    />
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
      {isMobile ? <FooterMobile /> : <FooterDesktop />}
    </>
  );
};

export default CasePage;

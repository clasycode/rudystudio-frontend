import React, { useState, useEffect } from "react";
import styles from "./Slider.module.scss";
import ModalInfo from "../../Modals/ModalInfo/ModalInfo";
import Anastasiya_modal from "../../../../assets/Anastasiya_modal.webp";
import Yuriy_modal from "../../../../assets/Yuriy_modal.webp";
import Denis_modal from "../../../../assets/Denis_modal.webp";
import Oleg_modal from "../../../../assets/Oleg_modal.webp";
import Anastasiya_mobile from "../../../../assets/Anastasiya_mobile.webp";
import Yuriy_mobile from "../../../../assets/Yuriy_mobile.webp";
import Denis_mobile from "../../../../assets/Denis_mobile.webp";
import Oleg_mobile from "../../../../assets/Oleg_mobile.webp";
import info from "../../../../assets/icon/info.svg";

const InstagramStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [id, setID] = useState(0);

  const stories = [
    {
      img: Anastasiya_mobile,
      image: Anastasiya_modal,
      name: "Анастасия",
      description:
        "Владелец SOEN - магазина корейской косметики. Помогли поднять продажи за счет создания интернет магазина   ",
    },
    {
      img: Yuriy_mobile,
      image: Yuriy_modal,
      name: "Руслан",
      description:
        "Владелец строительной компании “Построй дом”. Вместе с Юрием мы разработали сайт который стал приносить заявки в его бизнес",
    },
    {
      img: Denis_mobile,
      image: Denis_modal,
      name: "Денис",
      description:
        "Эксперт и наставник ВК Реклама. Создали посадочные страницы “воронки” для привлечения учеников на его курсы",
    },
    {
      img: Oleg_mobile,
      image: Oleg_modal,
      name: "Олег",
      description:
        "Владелец строительной фирмы “Чехов строй”. Помогли в привлечении клиентов и поднятии лояльности. Создали многостраничный сайт  ",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % stories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [stories.length]);

  const handleProgressBarClick = (index) => {
    setActiveIndex(index);
  };

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div
      className={styles.instagram__stories}
      onClick={() => {
        openModal();
        setID(activeIndex);
      }}
    >
      <div className={styles.slide__container}>
        <img src={stories[activeIndex].img} alt="" />
        <div className={styles.slide__row}>
          {stories[activeIndex].name}
          <img src={info} alt="" />
        </div>
      </div>
      <ModalInfo
        isOpen={modalOpen}
        onClose={closeModal}
        image={stories[id].image}
        text={stories[id].description}
        name={stories[id].name}
      />
      <div className={styles.progress__bars}>
        {stories.map((story, index) => (
          <div
            key={index}
            className={`${styles.progress__bar} ${
              index === activeIndex ? styles.active : ""
            }`}
            onClick={() => handleProgressBarClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default InstagramStories;

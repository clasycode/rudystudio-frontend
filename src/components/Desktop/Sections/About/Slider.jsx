import React, { useState, useEffect } from "react";
import styles from "./Slider.module.scss";
import Anastasiya_desktop from "../../../../assets/Anastasiya_desktop.webp";
import Yuriy_desktop from "../../../../assets/Yuriy_desktop.webp";
import Denis_desktop from "../../../../assets/Denis_desktop.webp";
import Oleg_desktop from "../../../../assets/Oleg_desktop.webp";

const InstagramStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const stories = [
    {
      image: Anastasiya_desktop,
      name: "Анастасия",
      description:
        "Владелец SOEN - магазина корейской косметики. Помогли поднять продажи за счет создания интернет магазина   ",
    },
    {
      image: Yuriy_desktop,
      name: "Руслан",
      description:
        "Владелец строительной компании “Построй дом” Вместе с Юрием мы разработали сайт который стал приносить заявки в его бизнес",
    },
    {
      image: Denis_desktop,
      name: "Денис",
      description:
        "Эксперт и наставник ВК Реклама. Создали посадочные страницы “воронки” для привлечения учеников на его курсы",
    },
    {
      image: Oleg_desktop,
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

  return (
    <div className={styles.instagram__stories}>
      <div className={styles.slide__container}>
        <img src={stories[activeIndex].image} alt="" />
        <div className={styles.story__info}>
          <div>{stories[activeIndex].name}</div>
          <p>{stories[activeIndex].description}</p>
        </div>
      </div>
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

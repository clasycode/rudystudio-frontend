import React from "react";
import styles from "./Steps.module.scss";
import Card from "./Card";

export default function Steps() {
  return (
    <div className={styles.steps}>
      <div className={styles.steps__flex}>
        <div className={styles.steps__title}>
          <h2>
            Этапы разработки <br />
            сайта
          </h2>
        </div>

        <div className={styles.steps__row}>
          <Card
            number={1}
            styled={{ background: "#d0fa9b" }}
            text={
              <span
                dangerouslySetInnerHTML={{ __html: "Анализ <br /> требований" }}
              />
            }
          />
          <Card
            number={2}
            styled={{ background: "#D0FA9B" }}
            text={
              <span
                dangerouslySetInnerHTML={{ __html: "Разработка <br /> ТЗ" }}
              />
            }
          />
          <Card
            number={3}
            styled={{ background: "#FFC7C2" }}
            text={
              <span
                dangerouslySetInnerHTML={{ __html: "UX/UI <br /> дизайн" }}
              />
            }
          />
          <Card
            number={4}
            styled={{ background: "#484848", color: "#FFF" }}
            text={
              <span
                dangerouslySetInnerHTML={{
                  __html: "Разработка или <br /> сборка",
                }}
              />
            }
          />
          <Card
            number={5}
            styled={{ background: "#484848", color: "#FFF" }}
            text={
              <span
                dangerouslySetInnerHTML={{
                  __html: "Тестирование <br /> сайта",
                }}
              />
            }
          />
          <Card
            number={6}
            styled={{ background: "#D6D4F0" }}
            text={
              <span
                dangerouslySetInnerHTML={{
                  __html: "Сопровождение <br /> проекта",
                }}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./Why.module.scss";
import CardActive from "./CardActive";
import Card from "./Card";
import advertise from "../../../../assets/icon/advertise.svg";
import result from "../../../../assets/icon/result.svg";

export default function Why() {
  return (
    <div className={styles.why}>
      <div className={styles.why__row}>
        <div className={styles.why__column}>
          <div className={styles.why__title}>
            <h1>Почему предприниматели выбирают нас?</h1>
          </div>
        </div>
        <div className={styles.why__column + " " + styles.cards}>
          <div className={styles.cards__row}>
            <div className={styles.cards__item}>
              <CardActive
                title="Маркетинг"
                text="Делаем сайты которые приводят клиентов"
                textHover="Наш маркетолог: ведущий специалист с опытом более 9 лет в контекстной рекламе, входит в ТОП-100 экспертов Я.Директ"
                img={advertise}
              />
            </div>
            <div className={styles.cards__item}>
              <CardActive
                title="Дедлайны"
                text="Мы понимаем, что время - это деньги"
                textHover="Мы понимаем, что время - это деньги, поэтому мы всегда соблюдаем сроки и готовы к работе 24/7, без выходных"
                img={result}
              />
            </div>
          </div>
          <div className={styles.cards__row}>
            <div className={styles.cards__item}>
              <Card
                title="3 года"
                text="Гарантия и техническая поддержка на сайте "
              />
            </div>
            <div className={styles.cards__item}>
              <Card
                title="от 40 000₽"
                text="Подберем оптимальное решение под малый бюджет"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

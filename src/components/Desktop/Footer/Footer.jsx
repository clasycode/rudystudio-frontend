import React, { useState } from "react";
import styles from "./Footer.module.scss";
import star from "../../../assets/star.svg";
import telegram_white from "../../../assets/icon/telegram_white.svg";
import vkontakte_white from "../../../assets/icon/vkontakte_white.svg";
import whatsapp_white from "../../../assets/icon/whatsapp_white.svg";
import telegram_pink from "../../../assets/icon/telegram_pink.svg";
import vkontakte_pink from "../../../assets/icon/vkontakte_pink.svg";
import whatsapp_pink from "../../../assets/icon/whatsapp_pink.svg";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isHovered, setIsHovered] = useState(null);
  const [isHovered2, setIsHovered2] = useState(null);
  const [isHovered3, setIsHovered3] = useState(null);
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      setNameError("Пожалуйста, введите ваше имя");
      return;
    } else if (/\d/.test(name)) {
      setNameError("Используйте только буквы в имени");
      return;
    } else {
      setNameError("");
    }

    if (!/^\d{10}$/.test(phone)) {
      setPhoneError("Введен некорректный номер");
      return;
    } else {
      setPhoneError("");
    }

    const formattedPhone = "+7" + phone;
    sendMessageToTelegram({ name, phone: formattedPhone });
    setPhone("");
    setName("");
    navigate("success");
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (!/\d/.test(value)) {
      setName(value);
      setNameError("");
    } else {
      setNameError("Используйте только буквы в имени");
    }
  };

  function handleClick(link) {
    window.open(link, "_blank");
  }

  function redirectToEmail() {
    window.location.href = "mailto:rudy.studio@yandex.ru";
  }

  const sendMessageToTelegram = async (formData) => {
    try {
      const response = await fetch(import.meta.env.VITE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: "-4167531274",
          text: `Имя: ${formData.name}\nТелефон: ${formData.phone}`,
        }),
      });
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__flex}>
        <div className={styles.footer__bg}>
          <img src={star} alt="" />
        </div>
        <div className={styles.footer__title}>
          <h2>
            Ваше имя может стать <br />
            началом чего-то великого
          </h2>
        </div>
        <div className={styles.footer__text}>
          Оставьте имя и телефон, и мы свяжемся с вами в течение <br />
          20 минут для обсуждения вашего проекта
        </div>
        <form onSubmit={handleSubmit} className={styles.footer__row}>
          <div className={styles.footer__item}>
            <div className={styles.block}>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Введите ваше имя"
              />
              {nameError && <div className={styles.error}>{nameError}</div>}
            </div>
          </div>
          <div className={`${styles.footer__item} ${styles.phone}`}>
            <div className={styles.block}>
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  const formattedPhone = e.target.value
                    .replace(/[^\d]/g, "")
                    .slice(0, 10);
                  setPhone(formattedPhone);
                  setPhoneError("");
                }}
                placeholder="(999) 999-99-99"
                className={styles.phone__inputText}
              />
              <span
                className={`${styles.phone__prefix} ${
                  phone && styles.phone__prefix_active
                }`}
              >
                +7
              </span>
              {phoneError && <div className={styles.error2}>{phoneError}</div>}
            </div>
          </div>
          <div className={styles.footer__item}>
            <button type="submit"> Отправить заявку</button>
          </div>
        </form>
        <div className={styles.footer__confidence}>
          Отправляя заявку, вы принимаете условия <span></span>
          <span className={styles.footer__underline}>
            <a href="#">политики конфиденциальности</a>
          </span>
        </div>
        <div className={styles.footer__unp}>УНП: KM0109764</div>
        <div className={styles.footer__mail} onClick={() => redirectToEmail()}>
          rudy.studio@yandex.ru
        </div>
        <div className={styles.footer__row2}>
          <div
            className={styles.footer__item2}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? (
              <img
                src={telegram_pink}
                alt=""
                onClick={() => handleClick("https://t.me/Zakharssss")}
              />
            ) : (
              <img src={telegram_white} alt="" />
            )}
          </div>
          <div
            className={styles.footer__item2}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            {isHovered2 ? (
              <img
                src={vkontakte_pink}
                alt=""
                onClick={() => handleClick("https://vk.com/rudystudio")}
              />
            ) : (
              <img src={vkontakte_white} alt="" />
            )}
          </div>
          <div
            className={styles.footer__item2}
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
          >
            {isHovered3 ? (
              <img
                src={whatsapp_pink}
                alt=""
                onClick={() => handleClick("https://wa.me/375299468676")}
              />
            ) : (
              <img src={whatsapp_white} alt="" />
            )}
          </div>
        </div>
        <div className={styles.footer__confidence2}>
          <a href="#">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}

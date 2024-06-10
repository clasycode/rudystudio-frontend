import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.scss";
import telegram_white from "../../../assets/icon/telegram_white.svg";
import vkontakte_white from "../../../assets/icon/vkontakte_white.svg";
import whatsapp_white from "../../../assets/icon/whatsapp_white.svg";
import telegram_pink from "../../../assets/icon/telegram_pink.svg";
import vkontakte_pink from "../../../assets/icon/vkontakte_pink.svg";
import whatsapp_pink from "../../../assets/icon/whatsapp_pink.svg";

export default function Footer() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isHovered, setIsHovered] = useState(null);
  const [isHovered2, setIsHovered2] = useState(null);
  const [isHovered3, setIsHovered3] = useState(null);
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  let navigate = useNavigate();

  const validatePhone = (phone) => {
    const phoneRegexRF = /^(\+7|8)?\d{10}$/;
    const phoneRegexRB = /^(\+375)?\d{9}$/;

    if (phoneRegexRF.test(phone) || phoneRegexRB.test(phone)) {
      return true;
    }
    return false;
  };

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

    if (!validatePhone(phone)) {
      setPhoneError("Некорректный номер телефона");
      return;
    } else {
      setPhoneError("");
    }

    const formattedPhone = phone.startsWith("+") ? phone : "+7" + phone;
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

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/[^\d+]/g, "");
    let formattedPhone = input;

    if (formattedPhone.startsWith("+375")) {
      formattedPhone = formattedPhone.slice(0, 13);
    } else if (formattedPhone.startsWith("+7")) {
      formattedPhone = formattedPhone.slice(0, 12);
    } else {
      formattedPhone = formattedPhone.slice(0, 11);
    }

    setPhone(formattedPhone);
    setPhoneError("");
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
        <div className={styles.footer__title}>
          <h1>
            Ваше имя может <br />
            стать началом <br />
            чего-то великого
          </h1>
        </div>
        <div className={styles.footer__text}>
          Оставьте имя и телефон, и мы <br />
          свяжемся с вами в течение 20 минут <br />
          для обсуждения вашего проекта
        </div>
        <form onSubmit={handleSubmit} className={styles.footer__row}>
          <div className={styles.footer__item}>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Введите ваше имя"
            />
          </div>
          {nameError && <div className={styles.error}>{nameError}</div>}
          <div className={`${styles.footer__item} ${styles.phone}`}>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Введите номер телефона"
              className={styles.phone__inputText}
            />
          </div>
          {phoneError && <div className={styles.error2}>{phoneError}</div>}
          <div className={styles.footer__confidence}>
            Отправляя заявку, вы принимаете условия <br />
            <span></span>
            <span className={styles.footer__underline}>
              <a href="/privacy-policy">политики конфиденциальности</a>
            </span>
          </div>
          <div className={styles.footer__item}>
            <button type="submit"> Отправить заявку</button>
          </div>
        </form>
        <div className={styles.footer__unp}>УНП: KM0109764</div>
        <div className={styles.footer__mail} onClick={() => redirectToEmail()}>
          rudy.studio@yandex.ru
        </div>
        <div className={styles.footer__row2}>
          <div
            className={styles.footer__item2}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => handleClick("https://t.me/Zakharssss")}
          >
            {isHovered ? (
              <img src={telegram_pink} alt="" />
            ) : (
              <img src={telegram_white} alt="" />
            )}
          </div>
          <div
            className={styles.footer__item2}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            onTouchStart={() => handleClick("https://vk.com/rudystudio")}
          >
            {isHovered2 ? (
              <img src={vkontakte_pink} alt="" />
            ) : (
              <img src={vkontakte_white} alt="" />
            )}
          </div>
          <div
            className={styles.footer__item2}
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
            onTouchStart={() => handleClick("https://wa.me/375299468676")}
          >
            {isHovered3 ? (
              <img src={whatsapp_pink} alt="" />
            ) : (
              <img src={whatsapp_white} alt="" />
            )}
          </div>
        </div>
        <div className={styles.footer__confidence2}>
          <a href="/privacy-policy">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}

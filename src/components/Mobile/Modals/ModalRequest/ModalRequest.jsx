import React, { useState, useEffect } from "react";
import styles from "./ModalRequest.module.scss";
import check from "../../../../assets/icon/check.svg";
import check_clicked from "../../../../assets/icon/check_clicked.svg";
import check_error from "../../../../assets/icon/check_error.svg";
import { useNavigate } from "react-router-dom";

export default function ModalRequest({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consentClicked, setConsentClicked] = useState(true);
  const [icon, setIcon] = useState(check);
  const [submitClicked, setSubmitClicked] = useState(false);
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
    setSubmitClicked(true);

    if (!name.trim()) {
      setNameError("Пожалуйста, введите ваше имя");
      return;
    } else if (/\d/.test(name)) {
      setNameError("Пожалуйста, используйте только буквы в имени");
      return;
    } else {
      setNameError("");
    }

    if (!validatePhone(phone)) {
      setPhoneError(
        "Пожалуйста, введите корректный номер телефона для РФ или РБ"
      );
      return;
    } else {
      setPhoneError("");
    }

    if (!consentClicked) {
      return;
    } else {
      const formattedPhone = phone.startsWith("+") ? phone : "+7" + phone;
      sendMessageToTelegram({ name, phone: formattedPhone });
      onClose();
      setPhone("");
      setName("");
      navigate("success");
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (!/\d/.test(value)) {
      setName(value);
      setNameError("");
    } else {
      setNameError("Пожалуйста, используйте только буквы в имени");
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (submitClicked && !consentClicked) {
      setIcon(check_error);
    } else {
      setIcon(consentClicked ? check_clicked : check);
    }
  }, [submitClicked, consentClicked]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

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
    <>
      {isOpen && (
        <div
          className={styles.modal__backdrop}
          onClick={handleBackdropClick}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.modal__content}>
            <div className={styles.modal__body}>
              <form
                onSubmit={handleSubmit}
                className={`${styles.modal__form} ${styles.form}`}
              >
                <div className={styles.form__title}>
                  Ваше имя может <br />
                  стать началом <br />
                  чего-то великого
                </div>
                <div className={styles.form__text}>
                  Оставьте имя и телефон, и мы <br />
                  свяжемся с вами в течение 20 минут <br />
                  для обсуждения вашего проекта
                </div>
                <div className={styles.form__input}>
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Введите ваше имя"
                  />
                </div>
                {nameError && <div className={styles.error}>{nameError}</div>}
                <div className={styles.phone__input}>
                  <input
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="Введите номер телефона"
                    className={styles.phone__inputText}
                  />
                </div>
                {phoneError && (
                  <div className={styles.error2}>{phoneError}</div>
                )}
                <div className={styles.form__row}>
                  <div
                    className={`${styles.form__checkbox}`}
                    onClick={() => setConsentClicked(!consentClicked)}
                  >
                    <img src={icon} alt="" />
                  </div>
                  <div className={styles.form__span}>
                    <label htmlFor="consent">
                      даю согласие на<span> </span>
                      <span onClick={() => onClose()}>
                        <a href="/privacy-policy" className={styles.link}>
                          обработку персональных данных
                        </a>
                      </span>
                    </label>
                  </div>
                </div>
                <div className={styles.form__button}>
                  <button type="submit">Отправить заявку</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

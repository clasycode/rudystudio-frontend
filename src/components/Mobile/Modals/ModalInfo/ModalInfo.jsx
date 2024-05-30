import React, { useState, useEffect } from "react";
import styles from "./ModalInfo.module.scss";
import close_modal from "../../../../assets/icon/close_modal.svg";

export default function ModalRequest({ isOpen, onClose, image, name, text }) {
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

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleCloseButtonClick = (event) => {
    const closeButton = event.target.closest(`.${styles.body__close}`);
    if (closeButton) {
      event.stopPropagation();
      onClose();
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
            <div className={`${styles.modal__body} ${styles.body}`}>
              <div className={styles.body__container}>
                <div className={styles.body__image}>
                  <img src={image} alt="" />
                  <div
                    className={styles.body__close}
                    onClick={handleCloseButtonClick}
                  >
                    <img src={close_modal} alt="" />
                  </div>
                </div>
                <div className={`${styles.body__name}`}>{name}</div>
                <div className={`${styles.body__text}`}>{text}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import React, { useEffect, useRef } from "react";
import styles from "./ModalVideo.module.scss";
import close_video from "../../../../assets/icon/close_video.svg";

export default function ModalVideo({ isOpen, onClose, video }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleCloseButtonClick = (event) => {
    const closeButton = event.target.closest(`.${styles.modal__close}`);
    if (closeButton) {
      event.stopPropagation();
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className={styles.modal__backdrop} role="dialog" aria-modal="true">
          <div ref={modalRef} className={styles.modal__content}>
            <div className={styles.modal__body}>
              <video src={video} controls autoPlay></video>
            </div>
            <div
              className={styles.modal__close}
              onClick={handleCloseButtonClick}
            >
              <img src={close_video} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

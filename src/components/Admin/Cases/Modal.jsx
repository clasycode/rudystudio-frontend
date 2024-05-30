import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ show, onClose, onConfirm }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>Подтверждение</div>
        <div className={styles.modalBody}>
          <p>Вы уверены, что хотите удалить этот кейс?</p>
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.button} onClick={onConfirm}>
            Да
          </button>
          <button className={styles.button} onClick={onClose}>
            Нет
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

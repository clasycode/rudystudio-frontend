import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Cases.module.scss";
import { deleteCase, fetchCases } from "../../../http/caseAPI";
import { observer } from "mobx-react-lite";
import edit from "../../../assets/icon/edit.svg";
import del from "../../../assets/icon/del.svg";
import Modal from "./Modal";

const Cases = observer(() => {
  const [cases, setCases] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCaseId, setSelectedCaseId] = useState(null);

  useEffect(() => {
    getCases();
  }, []);

  const getCases = async () => {
    try {
      const response = await fetchCases();
      if (response && Array.isArray(response.rows)) {
        setCases(response.rows);
      } else {
        console.error("Полученные данные не являются массивом:", response.data);
      }
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCase(id);
      setCases(cases.filter((siteCase) => siteCase.id !== id));
      setShowModal(false);
    } catch (error) {
      console.error("Ошибка при удалении кейса:", error);
    }
  };

  const openModal = (id) => {
    setSelectedCaseId(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedCaseId(null);
    setShowModal(false);
  };

  const confirmDelete = () => {
    handleDelete(selectedCaseId);
  };

  const baseUrl = import.meta.env.VITE_API_URL;

  return (
    <div className={styles.cases}>
      <div className={styles.container}>
        <div className={styles.cases__row}>
          {cases.map((siteCase) => (
            <div
              key={siteCase.id}
              className={`${styles.cases__column} ${styles.column}`}
            >
              <div className={styles.column__img}>
                {siteCase.caseImg && (
                  <img
                    src={`${baseUrl}static/${siteCase.caseImg}`}
                    alt={siteCase.titleDesktop}
                  />
                )}
              </div>
              <div className={styles.column__title}>
                <Link to={`/cases/${siteCase.caseLink}`}>
                  {siteCase.titleDesktop}
                </Link>
              </div>
              <div className={styles.column__row}>
                <div
                  className={styles.column__sphere}
                  style={{ background: siteCase.sphere_color }}
                >
                  {siteCase.sphere}
                </div>
                <div className={styles.column__buttons}>
                  <div className={styles.column__edit}>
                    <Link to={`/cases/edit/${siteCase.caseLink}`}>
                      <img src={edit} alt="" />
                    </Link>
                  </div>
                  <div
                    className={styles.column__delete}
                    onClick={() => openModal(siteCase.id)}
                  >
                    <img src={del} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal show={showModal} onClose={closeModal} onConfirm={confirmDelete} />
    </div>
  );
});

export default Cases;

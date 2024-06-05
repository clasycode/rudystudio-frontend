import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTE } from "../utils/consts";
import styles from "./Admin.module.scss";
import Cases from "../components/Admin/Cases/Cases";
import Blog from "../components/Admin/Blog/Blog";
import Prices from "../components/Admin/Prices/Prices";
import ChangePrice from "../components/Admin/ChangePrice/ChangePrice";
import AddBlog from "../components/Admin/ChangeBlog/AddBlog";
import AddCase from "../components/Admin/ChangeCase/AddCase";

export default function Admin() {
  const [showAddSection, setShowAddSection] = useState(false);
  const [activeTab, setActiveTab] = useState("cases");
  const addCaseRef = useRef();

  const handleAddClick = () => {
    setShowAddSection(true);
  };

  const handleExitClick = () => {
    setShowAddSection(false);
  };

  const handleSaveAndExitClick = () => {
    if (addCaseRef.current) {
      addCaseRef.current.handleSubmit();
    }
  };

  const navigate = useNavigate();

  const renderContent = () => {
    if (showAddSection) {
      switch (activeTab) {
        case "cases":
          return <AddCase ref={addCaseRef} onSubmit={handleExitClick} />;
        case "blog":
          return <AddBlog />;
        case "prices":
          return <ChangePrice />;
        default:
          return null;
      }
    }

    switch (activeTab) {
      case "cases":
        return <Cases />;
      case "blog":
        return <Blog />;
      case "prices":
        return <Prices />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.admin}>
      <div className={styles.admin__fixed}>
        <div className={styles.admin__row}>
          <div
            className={styles.admin__logo}
            onClick={() => navigate(MAIN_ROUTE)}
          >
            RudyStudio
          </div>
          <div
            className={styles.admin__button}
            onClick={() => navigate(MAIN_ROUTE)}
          >
            На сайт
          </div>
        </div>
        <div className={styles.admin__row}>
          <div className={styles.admin__column1}>
            <ul className={styles.admin__list1}>
              <li
                className={activeTab === "cases" ? styles.active : ""}
                onClick={() => setActiveTab("cases")}
              >
                Кейсы
              </li>
              <li
                className={activeTab === "blog" ? styles.active : ""}
                onClick={() => setActiveTab("blog")}
              >
                Блог
              </li>
              <li
                className={activeTab === "prices" ? styles.active : ""}
                onClick={() => setActiveTab("prices")}
              >
                Цены
              </li>
            </ul>
          </div>
          <div className={styles.admin__column2}>
            <ul className={styles.admin__list2}>
              {!showAddSection && <li onClick={handleAddClick}>Добавить +</li>}
            </ul>
            {showAddSection && (
              <ul className={styles.admin__list2}>
                <li onClick={handleExitClick}>Выйти</li>
                <li onClick={handleSaveAndExitClick}>Сохранить и выйти</li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className={styles.container}>{renderContent()}</div>
    </div>
  );
}

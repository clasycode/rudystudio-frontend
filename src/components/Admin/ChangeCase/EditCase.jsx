import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Case.module.scss";
import { observer } from "mobx-react-lite";
import delete_img from "../../../assets/icon/delete.svg";
import { fetchCase, updateCase } from "../../../http/caseAPI";

const EditCase = observer(() => {
  const { caseLink } = useParams();
  const [caseData, setCaseData] = useState({
    caseImg: null,
    caseImgPreview: null,
    caseLink: "",
    siteLink: "",
    titleDesktop: "",
    titleMobile: "",
    sphere: "",
    sphere_color: "",
    siteImg: null,
    siteImgPreview: null,
    what: "",
    problem: "",
    aim: "",
    sections: [{ title: "", text: "", img: null, imgPreview: null }],
  });

  const navigate = useNavigate();

  useEffect(() => {
    const getCaseData = async () => {
      try {
        const data = await fetchCase(caseLink);
        setCaseData({
          ...data,
          caseImgPreview: data.caseImg
            ? `${import.meta.env.VITE_API_URL}static/${data.caseImg}`
            : null,
          siteImgPreview: data.siteImg
            ? `${import.meta.env.VITE_API_URL}static/${data.siteImg}`
            : null,
          sections: data.sections.map((section) => ({
            ...section,
            imgPreview: section.img
              ? `${import.meta.env.VITE_API_URL}static/${section.img}`
              : null,
          })),
        });
      } catch (error) {
        console.error("Ошибка при получении данных кейса", error);
      }
    };

    getCaseData();
  }, [caseLink]);

  const selectFile = (setter, previewSetter) => (e) => {
    const file = e.target.files[0];
    if (file) {
      setter(file);
      previewSetter(URL.createObjectURL(file));
    }
  };

  const handleAddSection = () => {
    setCaseData((prev) => ({
      ...prev,
      sections: [
        ...prev.sections,
        { title: "", text: "", img: null, imgPreview: null },
      ],
    }));
  };

  const handleRemoveSection = (index) => {
    setCaseData((prev) => ({
      ...prev,
      sections: prev.sections.filter((_, i) => i !== index),
    }));
  };

  const handleChange = (index, field, value) => {
    setCaseData((prev) => ({
      ...prev,
      sections: prev.sections.map((section, i) =>
        i === index ? { ...section, [field]: value } : section
      ),
    }));
  };

  const handleFileChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setCaseData((prev) => ({
        ...prev,
        sections: prev.sections.map((section, i) =>
          i === index ? { ...section, img: file, imgPreview: preview } : section
        ),
      }));
    }
  };

  const handleRemoveImage = (index) => {
    setCaseData((prev) => ({
      ...prev,
      sections: prev.sections.map((section, i) =>
        i === index ? { ...section, img: null, imgPreview: null } : section
      ),
    }));
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("caseImg", caseData.caseImg);
    formData.append("caseLink", caseData.caseLink);
    formData.append("siteLink", caseData.siteLink);
    formData.append("titleDesktop", caseData.titleDesktop);
    formData.append("titleMobile", caseData.titleMobile);
    formData.append("sphere", caseData.sphere);
    formData.append("sphere_color", caseData.sphere_color);
    formData.append("siteImg", caseData.siteImg);
    formData.append("what", caseData.what);
    formData.append("problem", caseData.problem);
    formData.append("aim", caseData.aim);

    const sections = caseData.sections.map((section, index) => ({
      index,
      title: section.title,
      text: section.text,
      img: section.img,
    }));
    formData.append("sections", JSON.stringify(sections));

    caseData.sections.forEach((section, index) => {
      if (section.img) {
        formData.append(`sections[${index}][img]`, section.img);
      }
    });

    try {
      await updateCase(caseData.id, formData);
      navigate("/admin-panel");
    } catch (error) {
      console.error("Ошибка при обновлении кейса", error);
    }
  };

  return (
    <div className={styles.cases}>
      <div className={styles.container}>
        <div className={styles.title}>
          Редактирование кейса сайта <br />
          <span>{caseData.siteLink}</span>
        </div>
        <div className={`${styles.cases__form} ${styles.form}`}>
          <div className={styles.form__title}>
            <h2>Основные</h2>
          </div>
          <div className={styles.form__button}>
            <label className={styles.button1} htmlFor="caseImg">
              Добавить обложку
            </label>
            <input
              id="caseImg"
              type="file"
              onChange={selectFile(
                (file) => setCaseData({ ...caseData, caseImg: file }),
                (preview) =>
                  setCaseData({ ...caseData, caseImgPreview: preview })
              )}
              style={{ display: "none" }}
            />
            {caseData.caseImgPreview && (
              <img src={caseData.caseImgPreview} alt="Обложка" />
            )}
          </div>
          <div className={styles.form__input}>
            <input
              type="text"
              placeholder="Ссылка на кейс"
              value={caseData.caseLink}
              onChange={(e) =>
                setCaseData({ ...caseData, caseLink: e.target.value })
              }
            />
          </div>
          <div className={styles.form__input}>
            <input
              type="text"
              placeholder="Ссылка на сайт"
              value={caseData.siteLink}
              onChange={(e) =>
                setCaseData({ ...caseData, siteLink: e.target.value })
              }
            />
          </div>
          <div className={styles.form__input}>
            <input
              type="text"
              placeholder="Заголовок ПК версия"
              value={caseData.titleDesktop}
              onChange={(e) =>
                setCaseData({ ...caseData, titleDesktop: e.target.value })
              }
            />
          </div>
          <div className={styles.form__input}>
            <input
              type="text"
              placeholder="Заголовок мобильная версия"
              value={caseData.titleMobile}
              onChange={(e) =>
                setCaseData({ ...caseData, titleMobile: e.target.value })
              }
            />
          </div>
          <div className={styles.form__input}>
            <input
              type="text"
              placeholder="Сфера"
              value={caseData.sphere}
              onChange={(e) =>
                setCaseData({ ...caseData, sphere: e.target.value })
              }
            />
          </div>
          <div className={styles.form__input}>
            <input
              type="text"
              placeholder="Цвет сферы #C7C7C7"
              value={caseData.sphere_color}
              onChange={(e) =>
                setCaseData({ ...caseData, sphere_color: e.target.value })
              }
            />
          </div>
        </div>
        <div className={`${styles.cases__form} ${styles.form}`}>
          <div className={styles.form__title}>
            <h2>Кейс</h2>
          </div>
          <div className={styles.form__button}>
            <label className={styles.button2} htmlFor="siteImg">
              Добавить обложку кейса
            </label>
            <input
              id="siteImg"
              type="file"
              onChange={selectFile(
                (file) => setCaseData({ ...caseData, siteImg: file }),
                (preview) =>
                  setCaseData({ ...caseData, siteImgPreview: preview })
              )}
              style={{ display: "none" }}
            />
            {caseData.siteImgPreview && (
              <img src={caseData.siteImgPreview} alt="Обложка кейса" />
            )}
          </div>
          <div className={styles.form__input}>
            <input
              type="text"
              placeholder="О чем"
              value={caseData.what}
              onChange={(e) =>
                setCaseData({ ...caseData, what: e.target.value })
              }
            />
          </div>
          <div className={styles.form__input}>
            <input
              type="text"
              placeholder="Проблемы"
              value={caseData.problem}
              onChange={(e) =>
                setCaseData({ ...caseData, problem: e.target.value })
              }
            />
          </div>
          <div className={styles.form__input}>
            <input
              type="text"
              placeholder="Цели"
              value={caseData.aim}
              onChange={(e) =>
                setCaseData({ ...caseData, aim: e.target.value })
              }
            />
          </div>
        </div>
        <div className={`${styles.cases__form} ${styles.form}`}>
          <div className={styles.form__title}>
            <h2>Дополнительно</h2>
          </div>
          {caseData.sections.map((section, index) => (
            <div className={styles.section} key={index}>
              <div className={styles.form__input}>
                <input
                  type="text"
                  placeholder="Заголовок"
                  value={section.title}
                  onChange={(e) => handleChange(index, "title", e.target.value)}
                />
              </div>
              <div className={styles.form__input}>
                <input
                  type="text"
                  placeholder="Текст"
                  value={section.text}
                  onChange={(e) => handleChange(index, "text", e.target.value)}
                />
              </div>
              <div className={styles.form__button}>
                <label
                  className={styles.button4}
                  htmlFor={`sectionImg${index}`}
                >
                  Выбрать изображение
                </label>
                <input
                  id={`sectionImg${index}`}
                  type="file"
                  onChange={(e) => handleFileChange(index, e)}
                  style={{ display: "none" }}
                />
                {section.imgPreview && (
                  <div className={styles.section__preview}>
                    <img src={section.imgPreview} alt={`Секция ${index + 1}`} />
                    <div
                      className={styles.form__button}
                      onClick={() => handleRemoveImage(index)}
                    >
                      <img src={delete_img} alt="" />
                    </div>
                  </div>
                )}
              </div>
              <div
                className={styles.section__button}
                onClick={() => handleRemoveSection(index)}
              >
                <img src={delete_img} alt="" />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.form__button} onClick={handleAddSection}>
          <label className={styles.button3} htmlFor="">
            Добавить секцию
          </label>
        </div>
        <div className={styles.form__button} onClick={handleSubmit}>
          <label className={styles.button5} htmlFor="">
            Сохранить изменения
          </label>
        </div>
      </div>
    </div>
  );
});

export default EditCase;

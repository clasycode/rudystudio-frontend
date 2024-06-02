import React, { useState, forwardRef, useImperativeHandle } from "react";
import styles from "./Case.module.scss";
import { observer } from "mobx-react-lite";
import delete_img from "../../../assets/icon/delete.svg";
import { createCase } from "../../../http/caseAPI";

const AddCase = observer(
  forwardRef(({ onSubmit }, ref) => {
    const [caseImg, setCaseImg] = useState(null);
    const [caseImgPreview, setCaseImgPreview] = useState(null);
    const [caseLink, setCaseLink] = useState("");
    const [siteLink, setSiteLink] = useState("");
    const [titleDesktop, setTitleDesktop] = useState("");
    const [titleMobile, setTitleMobile] = useState("");
    const [sphere, setSphere] = useState("");
    const [sphereColor, setSphereColor] = useState("");

    const [siteImg, setSiteImg] = useState(null);
    const [siteImgPreview, setSiteImgPreview] = useState(null);
    const [what, setWhat] = useState("");
    const [problem, setProblem] = useState("");
    const [aim, setAim] = useState("");

    const [sections, setSections] = useState([
      { title: "", text: "", img: null, imgPreview: null },
    ]);

    const selectFile = (setter, previewSetter) => (e) => {
      const file = e.target.files[0];
      if (file) {
        setter(file);
        previewSetter(URL.createObjectURL(file));
      }
    };

    const handleAddSection = () => {
      setSections([
        ...sections,
        { title: "", text: "", img: null, imgPreview: null },
      ]);
    };

    const handleRemoveSection = (index) => {
      const newSections = sections.filter((_, i) => i !== index);
      setSections(newSections);
    };

    const handleChange = (index, field, value) => {
      const newSections = sections.map((section, i) =>
        i === index ? { ...section, [field]: value } : section
      );
      setSections(newSections);
    };

    const handleFileChange = (index, e) => {
      const file = e.target.files[0];
      if (file) {
        const preview = URL.createObjectURL(file);
        const newSections = sections.map((section, i) =>
          i === index ? { ...section, img: file, imgPreview: preview } : section
        );
        setSections(newSections);
      }
    };

    const handleRemoveImage = (index) => {
      const newSections = sections.map((section, i) =>
        i === index ? { ...section, img: null, imgPreview: null } : section
      );
      setSections(newSections);
    };

    const handleSubmit = async () => {
      const formData = new FormData();
      formData.append("caseImg", caseImg);
      formData.append("caseLink", caseLink);
      formData.append("siteLink", siteLink);
      formData.append("titleDesktop", titleDesktop);
      formData.append("titleMobile", titleMobile);
      formData.append("sphere", sphere);
      formData.append("sphere_color", sphereColor);
      formData.append("siteImg", siteImg);
      formData.append("what", what);
      formData.append("problem", problem);
      formData.append("aim", aim);

      sections.forEach((section, index) => {
        formData.append(`sections[${index}][title]`, section.title);
        formData.append(`sections[${index}][text]`, section.text);
        if (section.img) {
          formData.append(`sections[${index}][img]`, section.img);
        }
      });

      try {
        await createCase(formData);
        if (onSubmit) {
          onSubmit();
        }
      } catch (error) {
        console.error("Ошибка при создании кейса", error);
      }
    };

    useImperativeHandle(ref, () => ({
      handleSubmit,
    }));

    return (
      <div className={styles.cases}>
        <div className={styles.container}>
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
                onChange={selectFile(setCaseImg, setCaseImgPreview)}
                style={{ display: "none" }}
              />
              {caseImgPreview && <img src={caseImgPreview} alt="Обложка" />}
            </div>
            <div className={styles.form__input}>
              <input
                type="text"
                placeholder="Ссылка на кейс"
                value={caseLink}
                onChange={(e) => setCaseLink(e.target.value)}
              />
            </div>
            <div className={styles.form__input}>
              <input
                type="text"
                placeholder="Ссылка на сайт"
                value={siteLink}
                onChange={(e) => setSiteLink(e.target.value)}
              />
            </div>
            <div className={styles.form__input}>
              <input
                type="text"
                placeholder="Заголовок ПК версия"
                value={titleDesktop}
                onChange={(e) => setTitleDesktop(e.target.value)}
              />
            </div>
            <div className={styles.form__input}>
              <input
                type="text"
                placeholder="Заголовок мобильная версия"
                value={titleMobile}
                onChange={(e) => setTitleMobile(e.target.value)}
              />
            </div>
            <div className={styles.color}>
              <div className={styles.form__input1}>
                <input
                  type="text"
                  placeholder="Сфера"
                  value={sphere}
                  onChange={(e) => setSphere(e.target.value)}
                />
              </div>
              <div className={styles.form__input2}>
                <input
                  type="color"
                  placeholder="Цвет сферы #C7C7C7"
                  value={sphereColor}
                  onChange={(e) => setSphereColor(e.target.value)}
                />
              </div>
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
                onChange={selectFile(setSiteImg, setSiteImgPreview)}
                style={{ display: "none" }}
              />
              {siteImgPreview && (
                <img src={siteImgPreview} alt="Обложка кейса" />
              )}
            </div>
            <div className={styles.form__input}>
              <textarea
                type="text"
                placeholder="О чем"
                value={what}
                onChange={(e) => setWhat(e.target.value)}
                rows={10}
                maxLength={1000}
              />
            </div>
            <div className={styles.form__input}>
              <textarea
                type="text"
                placeholder="Проблемы"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                rows={10}
                maxLength={1000}
              />
            </div>
            <div className={styles.form__input}>
              <textarea
                type="text"
                placeholder="Цели"
                value={aim}
                onChange={(e) => setAim(e.target.value)}
                rows={10}
                maxLength={1000}
              />
            </div>
          </div>
          <div className={`${styles.cases__form} ${styles.form}`}>
            <div className={styles.form__title}>
              <h2>Дополнительно</h2>
            </div>
            {sections.map((section, index) => (
              <div className={styles.section} key={index}>
                <div className={styles.form__input}>
                  <input
                    type="text"
                    placeholder="Заголовок"
                    value={section.title}
                    onChange={(e) =>
                      handleChange(index, "title", e.target.value)
                    }
                  />
                </div>
                <div className={styles.form__input}>
                  <textarea
                    type="text"
                    placeholder="Текст"
                    value={section.text}
                    onChange={(e) =>
                      handleChange(index, "text", e.target.value)
                    }
                    rows={10}
                    maxLength={1000}
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
                      <img
                        src={section.imgPreview}
                        alt={`Секция ${index + 1}`}
                      />
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
        </div>
      </div>
    );
  })
);

export default AddCase;

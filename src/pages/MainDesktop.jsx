import React, { useState } from "react";
import Header from "../components/Desktop/Header/Header";
import About from "../components/Desktop/Sections/About/About";
import Why from "../components/Desktop/Sections/Why/Why";
import Draw from "../components/Desktop/Sections/Draw/Draw";
import Sites from "../components/Desktop/Sections/Sites/Sites";
import Text from "../components/Desktop/Sections/Text/Text";
import Last from "../components/Desktop/Sections/Last/Last";
import Steps from "../components/Desktop/Sections/Steps/Steps";
import Loyalty from "../components/Desktop/Sections/Loyalty/Loyalty";
import Result from "../components/Desktop/Sections/Result/Result";
import Footer from "../components/Desktop/Footer/Footer";
import Telegram from "../components/Desktop/Sections/Telegram/Telegram";
import styles from "./MainDesktop.module.scss";

export default function MainDesktop() {
  const [telegramVisible, setTelegramVisible] = useState(true);

  const handleCloseTelegram = () => {
    setTelegramVisible(false);
  };

  return (
    <div
      className={telegramVisible ? styles.withTelegram : styles.withoutTelegram}
    >
      {telegramVisible && <Telegram onClose={handleCloseTelegram} />}
      <Header isTelegramVisible={telegramVisible} />
      <div>
        <About />
        <Why />
        <div id="projects">
          <Last />
        </div>
        <Draw />
        <div id="cost">
          <Sites />
        </div>
        <Text />
        <Loyalty />
        <div id="dev-steps">
          <Steps />
        </div>
        <Result />
        <div id="contacts">
          <Footer />
        </div>
      </div>
    </div>
  );
}

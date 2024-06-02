import React, { useState } from "react";
import Header from "../components/Mobile/Header/Header";
import About from "../components/Mobile/Sections/About/About";
import Why from "../components/Mobile/Sections/Why/Why";
import Draw from "../components/Mobile/Sections/Draw/Draw";
import Sites from "../components/Mobile/Sections/Sites/Sites";
import Text from "../components/Mobile/Sections/Text/Text";
import Last from "../components/Mobile/Sections/Last/Last";
import Steps from "../components/Mobile/Sections/Steps/Steps";
import Loyalty from "../components/Mobile/Sections/Loyalty/Loyalty";
import Result from "../components/Mobile/Sections/Result/Result";
import Footer from "../components/Mobile/Footer/Footer";
import Telegram from "../components/Mobile/Sections/Telegram/Telegram";
import styles from "./MainMobile.module.scss";

export default function MainMobile() {
  const [telegramVisible, setTelegramVisible] = useState(true);

  const handleCloseTelegram = () => {
    setTelegramVisible(false);
  };

  return (
    <div>
      <Header />
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
      <div
        className={
          telegramVisible ? styles.withTelegram : styles.withoutTelegram
        }
      ></div>
      {telegramVisible && <Telegram onClose={handleCloseTelegram} />}
    </div>
  );
}

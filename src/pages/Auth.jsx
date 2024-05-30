import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import styles from "./Auth.module.scss";
import { login, registration } from "../http/userAPI";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTE } from "../utils/consts";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    try {
      const data = await login(email, password);
      user.setUser(data);
      user.setIsAuth(true);
      navigate(ADMIN_ROUTE);
    } catch (error) {
      console.error("Ошибка при авторизации:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Войти в RudyStudio</div>
      <div className={styles.input}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Логин"
        />
      </div>
      <div className={styles.input}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
        />
      </div>
      <div className={styles.button} onClick={click}>
        <button>Войти</button>
      </div>
    </div>
  );
});

export default Auth;

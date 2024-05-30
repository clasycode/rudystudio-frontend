import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";

import UserStore from "./store/UserStore.js";
import CaseStore from "./store/CaseStore.js";

export const Context = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context.Provider
      value={{
        user: new UserStore(),
        case: new CaseStore(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);

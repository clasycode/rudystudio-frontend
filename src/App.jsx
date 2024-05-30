import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";

const App = () => {
  const preventZoom = (event) => {
    if (event.ctrlKey) {
      event.preventDefault();
    }
  };
  document.addEventListener("wheel", preventZoom, { passive: false });
  const preventBrowserZoom = (event) => {
    if (event.ctrlKey && (event.key === "+" || event.key === "-")) {
      event.preventDefault();
    }
  };
  document.addEventListener("keydown", preventBrowserZoom);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;

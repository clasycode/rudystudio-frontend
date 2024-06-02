import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Context } from "../main";
import { ADMIN_ROUTE, CASES_ROUTE, MAIN_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import NotFoundDesktop from "../pages/NotFoundDesktop";
import NotFoundMobile from "../pages/NotFoundMobile";
import getRoutes from "../routes";

const AppRouter = observer(() => {
  const { user } = useContext(Context);
  const isMobile = window.innerWidth <= 999;
  const { authRoutes, publicRoutes } = getRoutes(isMobile);

  return (
    <Routes>
      <Route path={CASES_ROUTE} element={<Navigate to={MAIN_ROUTE} />} />
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      {user.isAuth ? (
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))
      ) : (
        <Route path={ADMIN_ROUTE} element={<Navigate to="/admin-login" />} />
      )}
      <Route
        path="*"
        element={isMobile ? <NotFoundMobile /> : <NotFoundDesktop />}
      />
    </Routes>
  );
});

export default AppRouter;

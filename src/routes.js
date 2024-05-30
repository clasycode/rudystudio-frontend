import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import MainDesktop from "./pages/MainDesktop";
import MainMobile from "./pages/MainMobile";
import NotFoundDesktop from "./pages/NotFoundDesktop";
import NotFoundMobile from "./pages/NotFoundMobile";
import SuccessDesktop from "./pages/SuccessDesktop";
import SuccessMobile from "./pages/SuccessMobile";
import Cases from "./pages/Cases";
import CasePage from "./pages/CasePage";
import EditCase from "./components/Admin/ChangeCase/EditCase";

import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  SUCCESS_ROUTE,
  ERROR_ROUTE,
  CASES_ROUTE,
} from "./utils/consts";

const getRoutes = (isMobile) => {
  const Main = isMobile ? MainMobile : MainDesktop;
  const Error = isMobile ? NotFoundMobile : NotFoundDesktop;
  const Success = isMobile ? SuccessMobile : SuccessDesktop;

  const authRoutes = [
    {
      path: ADMIN_ROUTE,
      Component: Admin,
    },
    {
      path: `${CASES_ROUTE}/edit/:caseLink`,
      Component: EditCase,
    },
  ];

  const publicRoutes = [
    {
      path: LOGIN_ROUTE,
      Component: Auth,
    },
    {
      path: MAIN_ROUTE,
      Component: Main,
    },
    {
      path: SUCCESS_ROUTE,
      Component: Success,
    },
    {
      path: ERROR_ROUTE,
      Component: Error,
    },
    {
      path: CASES_ROUTE,
      Component: Cases,
    },
    {
      path: CASES_ROUTE + "/:caseLink",
      Component: CasePage,
    },
  ];

  return { authRoutes, publicRoutes };
};

export default getRoutes;

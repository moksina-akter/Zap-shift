import { createBrowserRouter } from "react-router";
import MainLayouts from "../layoutes/MainLayouts";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AboutUs from "../pages/About/AboutUs";
import Story from "../pages/About/Story";
import Mission from "../pages/About/Mission";
import Success from "../pages/About/Success";
import Team from "../pages/About/Team";
import Error from "../Components/Error";
import AuthLayout from "../layoutes/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    hydrateFallbackElement: <p>loading</p>,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about-us",
        Component: AboutUs,
        children: [
          { index: true, element: <Story /> },
          { path: "mission", element: <Mission /> },
          { path: "success", element: <Success /> },
          { path: "team", element: <Team /> },
        ],
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("/service-center.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
export default router;

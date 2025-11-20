import { createBrowserRouter } from "react-router";
import MainLayouts from "../layoutes/MainLayouts";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      { index: true, Component: Home },
      //   { path: "contact", Component: Contact },
    ],
  },
]);
export default router;

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import { Colleges } from "../Pages/Colleges/Colleges";
import CardDetails from "../Pages/CardDetails/CardDetails";
import Admission from "../Pages/Admission/Admission";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/colleges",
        element: <Colleges />,
      },
      {
        path: "/admissions",
        element: <Admission />,
      },
      {
        path: "details/:id",
        element: <CardDetails />,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import { Colleges } from "../Pages/Colleges/Colleges";
import CardDetails from "../Pages/CardDetails/CardDetails";
import Admission from "../Pages/Admission/Admission";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import MyCollege from "../Pages/MyCollege/MyCollege";
import PrivateRoute from "./PrivateRoute";

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
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "/admissions",
        element: <Admission />,
      },
      {
        path: "/mycollege",
        element: (
          <PrivateRoute>
            <MyCollege />
          </PrivateRoute>
        ),
      },
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <CardDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

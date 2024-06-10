import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Log/Login";
import SignUp from "../Pages/Log/SignUp";

import BookService from "../Pages/BookService/BookService";

import AboutNav from "../Pages/AboutNav/AboutNav";
import Bookings from "../Pages/Bookings/Bookings";
import PrivetRoute from "./PrivetRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "logIn",
        element: <Login></Login>,
      },
      {
        path: "signUn",
        element: <SignUp></SignUp>,
      },
      {
        path: "book/:id",
        element: <BookService></BookService>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
      },
      {
        path: "Bookings",
        element: (
          <PrivetRoute>
            <Bookings></Bookings>
          </PrivetRoute>
        ),
      },
      {
        path: "aboutNav",
        element: <AboutNav></AboutNav>,
      },
    ],
  },
]);

export default router;

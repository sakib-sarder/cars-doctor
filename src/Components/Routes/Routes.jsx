import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Home/SignUp/SignUp";
import Checkout from "../../Pages/Checkout/Checkout";
import Bookings from "../../Pages/Bookings/Bookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "checkout/:id",
        element: <Checkout></Checkout>,
        loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "bookings",
        element: <Bookings></Bookings>
      }
    ],
  },
]);

export default router;

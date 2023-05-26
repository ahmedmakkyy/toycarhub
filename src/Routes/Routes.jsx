import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Homepage from "../Pages/Home/Homepage";
import Login from "../Pages/LogIn & SignUp/Login";
import SignUp from "../Pages/LogIn & SignUp/SignUp";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MyToys from "../Pages/MyToys/MyToys";
import Update from "../Pages/Update/Update";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog/Blog";
import Modal from "../Pages/Home/Modal";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Homepage></Homepage>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "signup",
            element: <SignUp></SignUp>
        },
        {
            path: "addtoy",
            element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
            path: "alltoys",
            element: <AllToys></AllToys>
        },
        {
            path: "mytoys",
            element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
            path: "toydetails/:id",
            element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
            loader : ({params})=> fetch (`https://toy-store-server-seven.vercel.app/toys/${params.id}`)
        },
        {
            path: "update/:id",
            element: <Update></Update>,
            loader : ({params})=> fetch (`https://toy-store-server-seven.vercel.app/toys/${params.id}`)
        },
        {
            path: "blog",
            element: <Blog></Blog>
        },
        {
            path: "popup",
            element: <Modal></Modal>
        }
      ]
    },
  ]);



  export default router; 
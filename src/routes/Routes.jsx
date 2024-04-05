import { createBrowserRouter } from "react-router-dom";
import Root from "../layoutes/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";
import Login from "../Entered/Login";
import NewsDetails from "../pages/NewsDetails";
import Register from "../Entered/Register";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: "/",
            element: <Home/>,
            loader: ()=>fetch("/news.json"),
        },
        {
          path: "/news/:id",
          element: <PrivateRoute><NewsDetails/></PrivateRoute> ,
          loader: ()=> fetch("/news.json")
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/career",
          element: <Career/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        }
      ]
    },
  ]);
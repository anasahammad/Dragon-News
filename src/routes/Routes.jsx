import { createBrowserRouter } from "react-router-dom";
import Root from "../layoutes/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";
import Login from "../Entered/Login";
import NewsDetails from "../pages/NewsDetails";

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
          element: <NewsDetails/>,
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
        }
      ]
    },
  ]);
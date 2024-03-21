import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import About from "./pages/About";
import Css from "./pages/Css";
import Html from "./pages/Html";
import Services from "./pages/Services";
import Logo from "./pages/Logo";
import Home from "./pages/Home";
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/html",
        element: <Html />,
      },
      {
        path: "/css",
        element: <Css />,
      },
      {
        path: "/logo",
        element: <Logo />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
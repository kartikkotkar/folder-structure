import ReactDOM  from "react-dom/client";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import Contact from "./Views/Contact/Contact";
import React from "react";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    }
])



const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);

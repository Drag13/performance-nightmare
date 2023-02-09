import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./router";
import "./index.css";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<RouterProvider router={appRouter} />);

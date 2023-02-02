import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";

const el = document.getElementById("root");

if (el == null) {
  throw new Error("element is null");
}

const root = createRoot(el);

root.render(<App />);

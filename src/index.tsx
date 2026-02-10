import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LoveLetter from "./LoveLetter";
import Memories from "./Memories";
import "./index.css";
import Layout from "./Layout";

if (localStorage.getItem("valentineDone")) {
  localStorage.removeItem("valentineDone");
  window.history.replaceState(null, "", "/");
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/love-letter" element={<LoveLetter />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

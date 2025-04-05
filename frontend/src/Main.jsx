import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Admin from "./admin";
import "./index.css"; 
import LoginPage from "./LoginPage";
import Thanks from "./Thanks";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/Thanks" element={<Thanks/>} />
    </Routes>
  </BrowserRouter>
);
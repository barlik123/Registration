import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import PublicRoute from "./route-components/PublicRoute";
import PrivateRoute from "./route-components/PrivateRoute";
import AdminRoute from "./route-components/AdminRoute";

import "./index.css"; 

import Admin from "./Admin";
import LoginPage from "./LoginPage";
import Thanks from "./Thanks";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PublicRoute><LoginPage /></PublicRoute>} />
      <Route path="/Admin" element={<AdminRoute><Admin /></AdminRoute>} />
      <Route path="/Thanks" element={<PrivateRoute><Thanks/></PrivateRoute>} />
    </Routes>
  </BrowserRouter>
);
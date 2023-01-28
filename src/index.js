import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./datas/data.json";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/home";
import About from "./pages/about";
import Logement from "./pages/logement";
import Error from "./pages/error";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route element={<Navigate replace to="/Accueil" />} path="/Kasa2" />
        <Route element={<Navigate replace to="/Accueil" />} path="/" />
        <Route exact path="/Accueil" element={<Home />} />
        <Route path="/A-Propos" element={<About />} />
        <Route path="/Logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);

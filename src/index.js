import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
        <Route exact path="/" element={<Home />} />
        <Route path="/A-Propos" element={<About />} />
        <Route path="/Logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} status={404} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);

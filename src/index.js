import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import Error from "./pages/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/A-Propos">
        <About />
      </Route>
      <Route exact path="/Logement">
        <Logement />
      </Route>
      <Route path="/404">
        <Error />
      </Route>
      <Footer />
    </Router>
  </React.StrictMode>
);

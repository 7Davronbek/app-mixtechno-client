import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import "./sass/main.scss";
import { HashRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./components/Footer";
import About from "./components/About";
import Service1 from "./pages/Service1";
// import Service2 from "./pages/Service2";
import Service3 from "./pages/Service3";
import Service4 from "./pages/Service4";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./pages/Services";
import Contact from "./components/Contact";
import Send from "./components/Send";
import Portfolio from "./components/Portfolio";
import Up from "./components/Up";
import "aos/dist/aos.css";
import "aos/dist/aos.js";

ReactDOM.render(
  <HashRouter>
    <Navbar />
    <ScrollToTop />

    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/service-1" exact component={Service1} />
      <Route path="/service-2" exact component={Service3} />
      <Route path="/service-3" exact component={Service4} />
      <Route path="/about" exact component={About} />
      <Route path="/services" exact component={Services} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/send-contact" exact component={Send} />
    </Switch>
    <Footer />

    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      theme="light"
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      style={{ zIndex: "999999999" }}
    />

    <Up />
  </HashRouter>,
  document.getElementById("mix-techno")
);

reportWebVitals();

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import './bootstrap.css'
import './bootstrap'
import Home from "./pages/Home";
import Services from "./pages/Services";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

function App() {

  return (
    <div className="App mx-0">
      <Router>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Category from "./components/Category";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeroSection />
        <Routes>
          <Route path="/products" element={<Category />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route
            path="/"
            element={
              <>
                <Category />
                <Services />
                <AboutUs />
                <ContactUs />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

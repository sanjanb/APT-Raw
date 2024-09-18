/* src/components/HeroSection.js */
import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const scrollToProducts = () => {
    document
      .getElementById("products-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Welcome to Aquaries Power Technology</h1>
        <p>
          Your trusted provider for batteries, solar solutions, cameras, and UPS
          systems.
        </p>

        <div className="info-cards">
          <div className="info-card">
            <h3>Batteries</h3>
            <p>High-quality batteries for every need.</p>
          </div>
          <div className="info-card">
            <h3>Cameras</h3>
            <p>Secure your space with our latest cameras.</p>
          </div>
          <div className="info-card">
            <h3>UPS Systems</h3>
            <p>Reliable UPS systems to keep your power stable.</p>
          </div>
          <div className="info-card">
            <h3>Solar Solutions</h3>
            <p>Eco-friendly solar solutions for your energy needs.</p>
          </div>
        </div>

        <div className="hero-buttons">
          <button onClick={scrollToProducts} className="btn-primary">
            View Products
          </button>
          <a href="/contact" className="btn-secondary">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

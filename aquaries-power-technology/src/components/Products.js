// src/components/Products.js
import React from "react";
import "./Products.css";

const Products = ({ category }) => {
  // Sample data, replace this with actual data fetching logic
  const productsData = {
    Batteries: [
      { id: 1, name: "Battery A", image: "/path/to/battery-a.jpg" },
      { id: 2, name: "Battery B", image: "/path/to/battery-b.jpg" },
    ],
    Cameras: [
      { id: 1, name: "Camera A", image: "/path/to/camera-a.jpg" },
      { id: 2, name: "Camera B", image: "/path/to/camera-b.jpg" },
    ],
    UPS: [
      { id: 1, name: "UPS A", image: "/path/to/ups-a.jpg" },
      { id: 2, name: "UPS B", image: "/path/to/ups-b.jpg" },
    ],
    Solar: [
      { id: 1, name: "Solar A", image: "/path/to/solar-a.jpg" },
      { id: 2, name: "Solar B", image: "/path/to/solar-b.jpg" },
    ],
  };

  // Check if category data exists
  const products = productsData[category] || [];

  return (
    <div className="products-section">
      <h2>{category} Products</h2>
      <div className="products-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
            </div>
          ))
        ) : (
          <p>No products available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Products;

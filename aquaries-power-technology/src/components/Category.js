import React, { useState } from "react"; // Remove useEffect
import Products from "./Products";
import "./Category.css";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("Batteries");
  const [loading, setLoading] = useState(false);

  const categories = [
    { name: "Batteries", icon: "🔋" },
    { name: "Cameras", icon: "📷" },
    { name: "UPS", icon: "🔌" },
    { name: "Solar", icon: "☀️" },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setLoading(true); // Show loading when switching categories
    setTimeout(() => {
      setLoading(false); // Simulate loading time
    }, 500); // You can replace this with actual API loading time
  };

  return (
    <div className="categories-section">
      <h2>Product Categories</h2>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`category-btn ${
              selectedCategory === category.name ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category.name)}
          >
            {category.icon} {category.name}
          </button>
        ))}
      </div>

      {/* Display Loading Spinner */}
      {loading ? (
        <div className="loading-spinner">Loading Products...</div>
      ) : (
        // Display Products Based on the Selected Category
        <Products category={selectedCategory} />
      )}
    </div>
  );
};

export default Categories;

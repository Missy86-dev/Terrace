import React from "react";
import "./features.css";

const Features = ({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
}) => {
  const categories = ["All", "Ceramics", "Lighting", "Textiles", "Desk"];

  return (
    <section className="features container">
      <div className="filter-pills">
        {categories.map((category) => (
          <button
            key={category}
            className={`pill ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search products"
          value={searchQuery || ""}
          onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
    </section>
  );
};

export default Features;

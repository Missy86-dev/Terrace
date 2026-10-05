import React from "react";
import Hero from "../Component/Hero";
import Features from "../Component/Features";
import Products from "../Component/Products";

const Home = ({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <main className="container">
      <Hero />
      <Features
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Products selectedCategory={selectedCategory} searchQuery={searchQuery} />
    </main>
  );
};

export default Home;

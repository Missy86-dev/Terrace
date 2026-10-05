import React from "react";
import "./products.css";
import { Link } from "react-router-dom";

import amaraMug from "../assets/images/amara-mug.jpg";
import aseBowl from "../assets/images/ase-bowl.jpg";
import dunaVase from "../assets/images/duna-vase.jpg";
import ileLamp from "../assets/images/ile-lamp.jpg";
import wispPendant from "../assets/images/wisp-pendant.jpg";
import emberLantern from "../assets/images/ember-lantern.jpg";
import alaroThrow from "../assets/images/alaro-throw.jpg";
import sisiCushion from "../assets/images/sisi-cushion.jpg";
import rafiaRunner from "../assets/images/rafia-runner.jpg";
import osunTray from "../assets/images/osun-tray.jpg";
import pebaBookends from "../assets/images/peba-bookends.jpg";
import koloPenCup from "../assets/images/kolo-pen-cup.jpg";

const formatPrice = (price) => {
  return `₦${price.toLocaleString("en-NG")}`;
};

const productsList = [
  {
    id: 1,
    name: "Amara Stoneware Mug",
    category: "Ceramics",
    price: 8500,
    image: amaraMug,
    link: "/amaramug",
  },
  {
    id: 2,
    name: "Asé Serving Bowl",
    category: "Ceramics",
    price: 15500,
    image: aseBowl,
    link: "/asebowl",
  },
  {
    id: 3,
    name: "Duna Bud Vase",
    category: "Ceramics",
    price: 12000,
    image: dunaVase,
    link: "/dunavase",
  },
  {
    id: 4,
    name: "Ilé Table Lamp",
    category: "Lighting",
    price: 34000,
    image: ileLamp,
    link: "/ilelamp",
  },
  {
    id: 5,
    name: "Wisp Pendant Light",
    category: "Lighting",
    price: 42500,
    image: wispPendant,
    link: "/wisppendant",
  },
  {
    id: 6,
    name: "Ember Candle Lantern",
    category: "Lighting",
    price: 15000,
    image: emberLantern,
    link: "/emberlantern",
  },
  {
    id: 7,
    name: "Alaró Throw Blanket",
    category: "Textiles",
    price: 26000,
    image: alaroThrow,
    link: "/alarothrow",
  },
  {
    id: 8,
    name: "Sisi Cushion Cover",
    category: "Textiles",
    price: 9000,
    image: sisiCushion,
    link: "/sisicushion",
  },
  {
    id: 9,
    name: "Rafia Table Runner",
    category: "Textiles",
    price: 11500,
    image: rafiaRunner,
    link: "/rafiarunner",
  },
  {
    id: 10,
    name: "Osun Desk Tray",
    category: "Desk",
    price: 14000,
    image: osunTray,
    link: "/osuntray",
  },
  {
    id: 11,
    name: "Peba Bookend Pair",
    category: "Desk",
    price: 19500,
    image: pebaBookends,
    link: "/pebabookends",
  },
  {
    id: 12,
    name: "Kolo Pen Cup",
    category: "Desk",
    price: 7000,
    image: koloPenCup,
    link: "/kolopencup",
  },
];

const Products = ({ selectedCategory, searchQuery }) => {
  const filteredProducts = productsList.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="products">
      {filteredProducts.length === 0 ? (
        <p className="no-results">
          No products found{searchQuery ? ` for "${searchQuery}"` : ""}
          {selectedCategory !== "All" ? ` in ${selectedCategory}` : ""}.
        </p>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <Link to={product.link} key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <p className="category">{product.category}</p>
                <h3>{product.name}</h3>
                <p className="price">{formatPrice(product.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;

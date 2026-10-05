import React, { useState } from "react";
import { Link } from "react-router-dom";
import ileLamp from "../assets/images/ile-lamp.jpg";
import "./product-detail.css";
import { useCart } from "../Context/CartContext";

const productData = {
  id: 4,
  name: "Ilé Table Lamp",
  category: "Lighting",
  price: 34000,
  image: ileLamp,
};

const IleLamp = () => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    addToCart(productData, quantity);
  };

  return (
    <div className="container product-detail-page">
      <Link to="/" className="back-link">
        ← Back to everything
      </Link>

      <div className="product-detail-layout">
        <div className="product-image-container">
          <img src={ileLamp} alt="Ilé Table Lamp" />
        </div>

        <div className="product-details">
          <p className="category-label">LIGHTING</p>
          <h2>Ilé Table Lamp</h2>
          <p className="price">₦34,000</p>

          <p className="description">
            Terracotta base paired with a linen drum shade. Gives off a warm,
            diffused light perfect for bedside tables or reading nooks.
          </p>

          <p className="specs">
            38cm total height. E27 fitting, inline switch.
          </p>

          <div className="action-row">
            <div className="quantity-selector">
              <button onClick={handleDecrease} className="qty-btn">
                -
              </button>
              <span className="qty-value">{quantity}</span>
              <button onClick={handleIncrease} className="qty-btn">
                +
              </button>
            </div>
            <button onClick={handleAddToCart} className="add-to-bag-btn">
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IleLamp;

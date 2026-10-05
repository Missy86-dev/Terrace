import React, { useState } from "react";
import { Link } from "react-router-dom";
import rafiaRunner from "../assets/images/rafia-runner.jpg";
import "./product-detail.css";
import { useCart } from "../Context/CartContext";

const productData = {
  id: 9,
  name: "Rafia Table Runner",
  category: "Textiles",
  price: 11500,
  image: rafiaRunner,
};

const RafiaRunner = () => {
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
          <img src={rafiaRunner} alt="Rafia Table Runner" />
        </div>

        <div className="product-details">
          <p className="category-label">TEXTILES</p>
          <h2>Rafia Table Runner</h2>
          <p className="price">₦11,500</p>

          <p className="description">
            Handwoven natural raffia runner that brings an organic, earthy feel
            to dining settings.
          </p>

          <p className="specs">35 x 150cm. Wipe clean with a damp cloth.</p>

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

export default RafiaRunner;

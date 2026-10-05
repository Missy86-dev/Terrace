import React, { useState } from "react";
import { Link } from "react-router-dom";
import wispPendant from "../assets/images/wisp-pendant.jpg";
import "./product-detail.css";
import { useCart } from "../Context/CartContext";

const productData = {
  id: 5,
  name: "Wisp Pendant Light",
  category: "Lighting",
  price: 42500,
  image: wispPendant,
};

const WispPendant = () => {
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
          <img src={wispPendant} alt="Wisp Pendant Light" />
        </div>

        <div className="product-details">
          <p className="category-label">LIGHTING</p>
          <h2>Wisp Pendant Light</h2>
          <p className="price">₦42,500</p>

          <p className="description">
            Woven rattan shade that casts subtle linear shadows across nearby
            surfaces when illuminated.
          </p>

          <p className="specs">45cm shade diameter, 1.5m adjustable cord.</p>

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

export default WispPendant;

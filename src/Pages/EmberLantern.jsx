import React, { useState } from "react";
import { Link } from "react-router-dom";
import emberLantern from "../assets/images/ember-lantern.jpg";
import "./product-detail.css";
import { useCart } from "../Context/CartContext";

const productData = {
  id: 6,
  name: "Ember Candle Lantern",
  category: "Lighting",
  price: 15000,
  image: emberLantern,
};

const EmberLantern = () => {
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
          <img src={emberLantern} alt="Ember Candle Lantern" />
        </div>

        <div className="product-details">
          <p className="category-label">LIGHTING</p>
          <h2>Ember Candle Lantern</h2>
          <p className="price">₦15,000</p>

          <p className="description">
            Matte metal frame with glass panels designed for pillar candles.
            Suitable for indoor ambient lighting or covered outdoor tables.
          </p>

          <p className="specs">22cm height, powder-coated steel & glass.</p>

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

export default EmberLantern;

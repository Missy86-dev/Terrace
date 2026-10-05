import React, { useState } from "react";
import { Link } from "react-router-dom";
import pebaBookends from "../assets/images/peba-bookends.jpg";
import "./product-detail.css";
import { useCart } from "../Context/CartContext";

const productData = {
  id: 11,
  name: "Peba Bookend Pair",
  category: "Desk",
  price: 19500,
  image: pebaBookends,
};

const PebaBookends = () => {
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
          <img src={pebaBookends} alt="Peba Bookend Pair" />
        </div>

        <div className="product-details">
          <p className="category-label">DESK</p>
          <h2>Peba Bookend Pair</h2>
          <p className="price">₦19,500</p>

          <p className="description">
            Heavy cast ceramic arch bookends designed to hold large volumes
            while serving as sculptural desk pieces.
          </p>

          <p className="specs">Set of 2. 14cm tall each.</p>

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

export default PebaBookends;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import dunaVase from "../assets/images/duna-vase.jpg";
import "./product-detail.css";
import { useCart } from "../Context/CartContext";

const productData = {
  id: 3,
  name: "Duna Bud Vase",
  category: "Ceramics",
  price: 12000,
  image: dunaVase,
};

const DunaVase = () => {
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
          <img src={dunaVase} alt="Duna Bud Vase" />
        </div>

        <div className="product-details">
          <p className="category-label">CERAMICS</p>
          <h2>Duna Bud Vase</h2>
          <p className="price">₦12,000</p>

          <p className="description">
            Narrow neck built for single stems or dry grasses. Heavy base keeps
            it stable even with taller cuttings.
          </p>

          <p className="specs">
            16cm tall, 8cm widest. Stoneware, satin finish.
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

export default DunaVase;

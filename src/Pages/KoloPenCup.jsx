import React, { useState } from "react";
import { Link } from "react-router-dom";
import koloPenCup from "../assets/images/kolo-pen-cup.jpg";
import "./product-detail.css";
import { useCart } from "../Context/CartContext";

const productData = {
  id: 12,
  name: "Kolo Pen Cup",
  category: "Desk",
  price: 7000,
  image: koloPenCup,
};

const KoloPenCup = () => {
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
          <img src={koloPenCup} alt="Kolo Pen Cup" />
        </div>

        <div className="product-details">
          <p className="category-label">DESK</p>
          <h2>Kolo Pen Cup</h2>
          <p className="price">₦7,000</p>

          <p className="description">
            Ribbed ceramic cylinder sized specifically for pens, brushes, or
            small desk tools.
          </p>

          <p className="specs">10cm height, 8cm diameter. Stoneware.</p>

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

export default KoloPenCup;

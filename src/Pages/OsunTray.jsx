import React, { useState } from "react";
import { Link } from "react-router-dom";
import osunTray from "../assets/images/osun-tray.jpg";
import "./product-detail.css";
import { useCart } from "../Context/CartContext";

const productData = {
  id: 10,
  name: "Osun Desk Tray",
  category: "Desk",
  price: 14000,
  image: osunTray,
};

const OsunTray = () => {
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
          <img src={osunTray} alt="Osun Desk Tray" />
        </div>

        <div className="product-details">
          <p className="category-label">DESK</p>
          <h2>Osun Desk Tray</h2>
          <p className="price">₦14,000</p>

          <p className="description">
            Carved hardwood tray designed to keep daily desk essentials and
            stationery organized.
          </p>

          <p className="specs">24 x 12cm. Solid wood, oiled finish.</p>

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

export default OsunTray;

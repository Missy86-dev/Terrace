import React, { useState } from "react";
import { Link } from "react-router-dom";
import amaraMug from "../assets/images/amara-mug.jpg";
import "./product-detail.css";
import { useCart } from "../Context/CartContext";

const productData = {
  id: 1,
  name: "Amara Stoneware Mug",
  category: "Ceramics",
  price: 8500,
  image: amaraMug,
};

const AmaraMug = () => {
  const { addToCart } = useCart();

  // Local state for quantity counter
  const [quantity, setQuantity] = useState(1);

  // Decrease quantity (stops at 1)
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Increase quantity
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  // Add current quantity selection to header cart
  const handleAddToCart = () => {
    addToCart(productData, quantity);
  };

  return (
    <div className="container product-detail-page">
      <Link to="/" className="back-link">
        ← Back to everything
      </Link>

      <div className="product-detail-layout">
        {/* LEFT WING */}
        <div className="product-image-container">
          <img src={amaraMug} alt="Amara Stoneware Mug" />
        </div>

        {/* RIGHT WING */}
        <div className="product-details">
          <p className="category-label">CERAMICS</p>
          <h2>Amara Stoneware Mug</h2>
          <p className="price">₦8,500</p>

          <p className="description">
            Hand-thrown stoneware with a ribbed exterior that keeps its grip
            when wet. The matte glaze is speckled with iron flecks from the raw
            clay, and no two come out identical.
          </p>

          <p className="specs">
            350ml. Stoneware. Dishwasher and microwave safe.
          </p>

          {/* QUANTITY & ADD TO BAG CONTROLS */}
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

export default AmaraMug;

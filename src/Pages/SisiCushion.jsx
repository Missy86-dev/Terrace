import React, { useState } from "react";
import { Link } from "react-router-dom";
import sisiCushion from "../assets/images/sisi-cushion.jpg";
import "./product-detail.css";
import { useCart } from "../Context/CartContext";

const productData = {
  id: 8,
  name: "Sisi Cushion Cover",
  category: "Textiles",
  price: 9000,
  image: sisiCushion,
};

const SisiCushion = () => {
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
          <img src={sisiCushion} alt="Sisi Cushion Cover" />
        </div>

        <div className="product-details">
          <p className="category-label">TEXTILES</p>
          <h2>Sisi Cushion Cover</h2>
          <p className="price">₦9,000</p>

          <p className="description">
            Textured linen blend cover featuring an invisible zipper closure and
            reinforced stitching for durability.
          </p>

          <p className="specs">45 x 45cm. Insert not included.</p>

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

export default SisiCushion;

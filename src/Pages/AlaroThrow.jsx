import React, { useState } from "react";
import { Link } from "react-router-dom";
import alaroThrow from "../assets/images/alaro-throw.jpg";
import "./product-detail.css";
import { useCart } from "../Context/CartContext";

const productData = {
  id: 7,
  name: "Alaró Throw Blanket",
  category: "Textiles",
  price: 26000,
  image: alaroThrow,
};

const AlaroThrow = () => {
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
          <img src={alaroThrow} alt="Alaró Throw Blanket" />
        </div>

        <div className="product-details">
          <p className="category-label">TEXTILES</p>
          <h2>Alaró Throw Blanket</h2>
          <p className="price">₦26,000</p>

          <p className="description">
            Open waffle weave in washed cotton, warm without weight, with a
            short hand-knotted fringe at one end. Softens noticeably after the
            first wash.
          </p>

          <p className="specs">130 x 180cm. 100% cotton. Machine wash cold.</p>

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

export default AlaroThrow;

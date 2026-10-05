import React, { useState } from "react";
import { Link } from "react-router-dom";
import asebowl from "../assets/images/ase-bowl.jpg";
import "./product-detail.css";
import { useCart } from "../Context/CartContext";

const productData = {
  id: 2,
  name: "Asé Serving Bowl",
  category: "Ceramics",
  price: 15500,
  image: asebowl,
};

const AseBowl = () => {
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
          <img src={asebowl} alt="Asé Serving Bowl" />
        </div>

        {/* RIGHT WING */}
        <div className="product-details">
          <p className="category-label">CERAMICS</p>
          <h2>Asé Serving Bowl</h2>
          <p className="price">₦15,500</p>

          <p className="description">
            A shallow bowl wide enough for a full meal for two. The reactive
            glaze pools darker toward the centre, and the unglazed foot ring
            leaves a raw clay edge you feel when you lift it.
          </p>

          <p className="specs">
            28cm diameter, 7cm deep. Stoneware, reactive glaze.
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

export default AseBowl;

import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, subtotal, clearCart } =
    useCart();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setIsSuccess(true);
    clearCart();
  };

  return (
    <div
      className="container"
      style={{ padding: "40px 20px", maxWidth: "800px" }}
    >
      <h2>Your Cart</h2>

      {isSuccess && (
        <div
          style={{
            backgroundColor: "#e6fffa",
            border: "1px solid #38b2ac",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          Thank you! Your order has been placed using{" "}
          {paymentMethod.toUpperCase()}.
        </div>
      )}

      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <Link to="/">Continue Shopping</Link>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #eee",
                padding: "15px 0",
              }}
            >
              <div
                style={{ display: "flex", gap: "15px", alignItems: "center" }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "60px", height: "60px", objectFit: "cover" }}
                />
                <div>
                  <h4>{item.name}</h4>
                  <p>₦{item.price.toLocaleString()}</p>
                </div>
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{ color: "red", marginLeft: "10px" }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div
            style={{
              marginTop: "30px",
              background: "#f9f9f9",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h3>Total Amount: ₦{subtotal.toLocaleString()}</h3>
            <h4>Select Payment Method</h4>
            <div style={{ display: "flex", gap: "15px", margin: "15px 0" }}>
              <label>
                <input
                  type="radio"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />{" "}
                Card
              </label>
              <label>
                <input
                  type="radio"
                  value="transfer"
                  checked={paymentMethod === "transfer"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />{" "}
                Bank Transfer
              </label>
              <label>
                <input
                  type="radio"
                  value="ussd"
                  checked={paymentMethod === "ussd"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />{" "}
                USSD
              </label>
            </div>

            <button
              onClick={handleCheckout}
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#111",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Pay Now (₦{subtotal.toLocaleString()})
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

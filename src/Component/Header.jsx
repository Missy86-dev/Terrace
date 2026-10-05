// import React from "react";
// import "./header.css";
// import { Link } from "react-router-dom";
// import { ShoppingBag } from "lucide-react";
// import { useCart } from "../Context/CartContext";

// const Header = ({ selectedCategory, setSelectedCategory }) => {
//   const { cart } = useCart();
//   const totalItems = cart
//     ? cart.reduce((sum, item) => sum + item.quantity, 0)
//     : 0;

//   return (
//     <header>
//       <nav className="container">
//         <Link
//           to="/"
//           className="logo"
//           onClick={() => setSelectedCategory("All")}
//         >
//           <span className="logo-mark"></span>Terrace
//         </Link>

//         <ul className="nav-links">
//           {["Ceramics", "Lighting", "Textiles", "Desk"].map((cat) => (
//             <li key={cat}>
//               <button
//                 className={`nav-btn ${selectedCategory === cat ? "active" : ""}`}
//                 onClick={() => setSelectedCategory(cat)}
//               >
//                 {cat}
//               </button>
//             </li>
//           ))}
//         </ul>

//         <div className="nav-cta">
//           <Link to="/cart" className="cart-button" aria-label="Shopping cart">
//             <ShoppingBag size={22} strokeWidth="1.8" />
//             <span className="cart-count">{totalItems}</span>
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../Context/CartContext";

const categories = ["Ceramics", "Lighting", "Textiles", "Desk"];

const Header = ({ selectedCategory, onSelectCategory }) => {
  const { cartCount } = useCart();

  const handleCategoryClick = (category) => {
    if (onSelectCategory) {
      onSelectCategory(category);
    }
  };

  const handleLogoClick = () => {
    if (onSelectCategory) {
      onSelectCategory("All");
    }
  };

  return (
    <header>
      <nav className="container">
        <Link to="/" className="logo" onClick={handleLogoClick}>
          <span className="logo-mark"></span>Terrace
        </Link>

        <ul className="nav-links">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                className={`nav-btn ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <Link to="/cart" className="cart-button" aria-label="Shopping cart">
            <ShoppingBag size={22} strokeWidth="1.8" />
            <span className="cart-count">{cartCount || 0}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

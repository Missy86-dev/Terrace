// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import { CartProvider } from "./Context/CartContext";

// import Header from "./Component/Header";
// import Footer from "./Component/Footer";
// import Home from "./Pages/Home";
// import CartPage from "./Pages/CartPage";
// import AmaraMug from "./Pages/AmaraMug";
// import AseBowl from "./Pages/AseBowl";
// import DunaVase from "./Pages/DunaVase";
// import IleLamp from "./Pages/IleLamp";
// import WispPendant from "./Pages/WispPendant";
// import EmberLantern from "./Pages/EmberLantern";
// import AlaroThrow from "./Pages/AlaroThrow";
// import SisiCushion from "./Pages/SisiCushion";
// import RafiaRunner from "./Pages/RafiaRunner";
// import OsunTray from "./Pages/OsunTray";
// import PebaBookends from "./Pages/PebaBookends";
// import KoloPenCup from "./Pages/KoloPenCup";

// const App = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   return (
//     <CartProvider>
//       <Header
//         selectedCategory={selectedCategory}
//         setSelectedCategory={setSelectedCategory}
//       />

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Home
//               selectedCategory={selectedCategory}
//               setSelectedCategory={setSelectedCategory}
//             />
//           }
//         />

//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/amaramug" element={<AmaraMug />} />
//         <Route path="/asebowl" element={<AseBowl />} />
//         <Route path="/dunavase" element={<DunaVase />} />
//         <Route path="/ilelamp" element={<IleLamp />} />
//         <Route path="/wisppendant" element={<WispPendant />} />
//         <Route path="/emberlantern" element={<EmberLantern />} />
//         <Route path="/alarothrow" element={<AlaroThrow />} />
//         <Route path="/sisicushion" element={<SisiCushion />} />
//         <Route path="/rafiarunner" element={<RafiaRunner />} />
//         <Route path="/osuntray" element={<OsunTray />} />
//         <Route path="/pebabookends" element={<PebaBookends />} />
//         <Route path="/kolopencup" element={<KoloPenCup />} />
//       </Routes>

//       <Footer />
//     </CartProvider>
//   );
// };

// export default App;

import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// Context & Navigation Components
import { CartProvider } from "./Context/CartContext";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import CartPage from "./Pages/CartPage";

// Product Detail Pages
import AmaraMug from "./Pages/AmaraMug";
import AseBowl from "./Pages/AseBowl";
import DunaVase from "./Pages/DunaVase";
import IleLamp from "./Pages/IleLamp";
import WispPendant from "./Pages/WispPendant";
import EmberLantern from "./Pages/EmberLantern";
import AlaroThrow from "./Pages/AlaroThrow";
import SisiCushion from "./Pages/SisiCushion";
import RafiaRunner from "./Pages/RafiaRunner";
import OsunTray from "./Pages/OsunTray";
import PebaBookends from "./Pages/PebaBookends";
import KoloPenCup from "./Pages/KoloPenCup";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Sets active filter AND redirects back to homepage product grid
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    navigate("/");
  };

  return (
    <CartProvider>
      <Header
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />

      <Routes>
        {/* Main Storefront Route */}
        <Route
          path="/"
          element={
            <Home
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          }
        />

        {/* Cart Page Route */}
        <Route path="/cart" element={<CartPage />} />

        {/* Individual Product Routes */}
        <Route path="/amaramug" element={<AmaraMug />} />
        <Route path="/asebowl" element={<AseBowl />} />
        <Route path="/dunavase" element={<DunaVase />} />
        <Route path="/ilelamp" element={<IleLamp />} />
        <Route path="/wisppendant" element={<WispPendant />} />
        <Route path="/emberlantern" element={<EmberLantern />} />
        <Route path="/alarothrow" element={<AlaroThrow />} />
        <Route path="/sisicushion" element={<SisiCushion />} />
        <Route path="/rafiarunner" element={<RafiaRunner />} />
        <Route path="/osuntray" element={<OsunTray />} />
        <Route path="/pebabookends" element={<PebaBookends />} />
        <Route path="/kolopencup" element={<KoloPenCup />} />
      </Routes>

      <Footer />
    </CartProvider>
  );
};

export default App;

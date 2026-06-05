import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Auth } from "./Auth";
import { Checkout } from "./Checkout";
import { Navbar } from "./components/Navbar";

import { AuthProvider } from "./context/AuthContext";
import { ProductDetails } from "./ProductDetails";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;

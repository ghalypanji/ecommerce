import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Auth } from "./Auth";
import { Checkout } from "./Checkout";
import { Navbar } from "./components/Navbar";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Auth } from "./Auth";
import { Checkout } from "./Checkout";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </div>
  );
}

export default App;

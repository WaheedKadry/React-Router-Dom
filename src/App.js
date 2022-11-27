import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import About from "./components/about";
import ProductsList from "./components/ProductsList";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/"  element={  <><Slider /><ProductsList /></>} />
        <Route path="/about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails p=':productId'/>} />
      </Routes>
     
      </div>
  );
}

export default App;


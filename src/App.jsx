import React, { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      description: "High-quality wireless headphones with noise cancellation.",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 149.99,
      description: "Track your fitness and notifications on the go.",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 59.99,
      description: "Portable speaker with deep bass and long battery life.",
    },
    {
      id: 4,
      name: "E-reader",
      price: 129.99,
      description: "Read your favorite books anywhere, anytime.",
    },
  ]);

  return (
    <div className="app-container">
      <h1 className="app-title">Ecommerce Product Listing</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;

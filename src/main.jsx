import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Productlist from "./pages/Productlist.jsx";
import Product from "./pages/Product.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Productlist /> */}
    {/* <Product /> */}
    {/* <Register /> */}
    {/* <Login /> */}
    <Cart />
  </React.StrictMode>
);

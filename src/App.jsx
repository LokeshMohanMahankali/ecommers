import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Productlist from "./pages/Productlist";

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/products/:category" element={<Productlist />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/Login"
          element={user ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route
          path="/Register"
          element={user ? <Navigate to="/" /> : <Register />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Cart } from "./components/Cart";
import IndividualProducts from "./components/IndividualProducts";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import CartProvider from "./context/CartProvider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <ToastContainer></ToastContainer>
      {/* Routes start */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="individualProduct/:id"
          element={
            <CartProvider>
              <IndividualProducts></IndividualProducts>
            </CartProvider>
          }
        ></Route>

        <Route
          path="viewCart"
          element={
            <CartProvider>
              <Cart></Cart>
            </CartProvider>
          }
        ></Route>
        <Route
          path="products"
          element={
            <CartProvider>
              <Products></Products>
            </CartProvider>
          }
        ></Route>
      </Routes>
      {/* Routes End */}
    </>
  );
}

export default App;

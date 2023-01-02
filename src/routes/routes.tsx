import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CartPage from "../pages/CartPage";
import { CartProvider } from "../providers/cartContext";
import AuthRoute from "./AuthRoute";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="cart" element={<AuthRoute />}>
        <Route
          index
          element={
            <CartProvider>
              <CartPage />
            </CartProvider>
          }
        />
      </Route>
    </Routes>
  );
};

import React from "react";
import { useContext } from "react";
import Cart from "./Cart";
import Header from "./Header";
import ProductList from "./ProductsList";
import { CartContext } from "../../providers/cartContext";
import { Loading } from "../../styles/loading";

export const CartHome = () => {
  const { loading } = useContext(CartContext);

  return (
    <div>
      {loading ? (
        <Loading>Carregando...</Loading>
      ) : (
        <>
          <Header />
          <ProductList />
          <Cart />
        </>
      )}
    </div>
  );
};

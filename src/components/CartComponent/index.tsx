import React from "react";
import { useContext } from "react";
import Cart from "./Cart";
import Header from "./Header";
import ProductList from "./ProductsList";
import { CartContext } from "../../providers/cartContext";
import { Loading } from "../../styles/loading";
import Modal from "./Modal";

export const CartHome = () => {
  const { loading, modal } = useContext(CartContext);
  
  return (
    <div>
      {loading ? (
        <Loading>Carregando...</Loading>
      ) : (
        <>
          <Header />
          <ProductList />
          <Cart />
          {modal && <Modal/>}
        </>
      )}
    </div>
  );
};

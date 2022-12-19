import React from "react";
import { CartDiv, CartHead, CartList } from "../styles/cart";
import CartProduct from "./CartProduct";
import CartTotal from "./CartTotal";
import EmptyCart from "./EmptyCart";

const Cart = ({ currentSale, setCurrentSale, handleClickDelete }) => {
  return currentSale.length ? (
    <CartDiv>
      <CartHead>
        <h3>Carrinho de compras</h3>
      </CartHead>
      <CartList>
        {currentSale.map((product, index) => (
          <CartProduct
            key={index}
            product={product}
            handleClickDelete={handleClickDelete}
          />
        ))}
        <hr></hr>
      </CartList>
      <CartTotal currentSale={currentSale} setCurrentSale={setCurrentSale} />
    </CartDiv>
  ) : (
    <CartDiv>
      <CartHead>
        <h3>Carrinho de compras</h3>
      </CartHead>
      <EmptyCart />
    </CartDiv>
  );
};

export default Cart;

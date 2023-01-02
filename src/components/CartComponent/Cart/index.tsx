import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../providers/cartContext";
import { CartDiv, CartHead, CartList} from "../../../styles/cart";
import CartProduct from "./CartProduct";
import CartTotal from "./CartTotal";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const { currentSale } = useContext(CartContext);

  return currentSale.length ? (
    <CartDiv>
      <CartHead>
        <h3>Carrinho de compras</h3>
      </CartHead>
      <CartList>
        {currentSale.map((product, index) => (
          <CartProduct key={index} product={product} />
        ))}
        <hr></hr>
      </CartList>
      <CartTotal />
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

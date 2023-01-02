import React from "react";
import { RemoveBtn } from "../../../../styles/buttons";
import {
  CartTotalDiv,
  CartTotalPrice,
  TotalText,
  TotalCount,
} from "../../../../styles/totalCart";
import { useContext } from "react";
import { CartContext } from "../../../../providers/cartContext";

const CartTotal = () => {
  const { setCurrentSale, currentSale } = useContext(CartContext);
  const arrayPrice = currentSale.map((product) => product.price);

  return (
    <CartTotalDiv>
      <CartTotalPrice>
        <TotalText>Total</TotalText>
        <TotalCount>
          R$ {arrayPrice.reduce((acc, cur) => acc + cur, 0).toFixed(2)}
        </TotalCount>
      </CartTotalPrice>
      <RemoveBtn onClick={() => setCurrentSale([])}>Remover todos</RemoveBtn>
    </CartTotalDiv>
  );
};

export default CartTotal;

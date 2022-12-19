import React from "react";
import { RemoveBtn } from "../../styles/buttons";
import {
  CartTotalDiv,
  CartTotalPrice,
  TotalText,
  TotalCount,
} from "../../styles/totalCart";

const CartTotal = ({ currentSale, setCurrentSale }) => {
  const arrayPrice = currentSale.map((product) => product.price);

  return (
    <CartTotalDiv>
      <CartTotalPrice>
        <TotalText>Total</TotalText>
        <TotalCount>
          R$ {arrayPrice.reduce((acc, cur) => acc + cur, 0).toFixed(2)}
        </TotalCount>
      </CartTotalPrice>
      <RemoveBtn onClick={(e) => setCurrentSale([])}>Remover todos</RemoveBtn>
    </CartTotalDiv>
  );
};

export default CartTotal;

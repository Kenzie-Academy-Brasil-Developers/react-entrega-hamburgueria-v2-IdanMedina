import React from "react";
import { EmptyCartDiv } from "../../styles/cart"

const EmptyCart = () => {
  return (
    <EmptyCartDiv>
        <h3>Sua sacola está vazia</h3>
        <p>Adicione itens</p>
    </EmptyCartDiv>
  )
}

export default EmptyCart
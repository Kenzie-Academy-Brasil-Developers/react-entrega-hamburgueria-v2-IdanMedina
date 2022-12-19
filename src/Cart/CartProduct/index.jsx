import React from "react";
import { RemoveSpn } from "../../styles/buttons";
import { CardCart, CardCartImg, CardCartInfo } from "../../styles/cardCart";

const CartProduct = ({
  product,
  handleClickDelete
}) => {
  return (
    <CardCart>
      <div>
        <CardCartImg src={product.img} alt={product.name} />
      </div>
      <CardCartInfo>
        <h4>{product.name}</h4>
        <p>{product.category}</p>
      </CardCartInfo>
      <RemoveSpn
        id={product.id}
        onClick={(e) => handleClickDelete(e.target.id)}
      >
        Remover
      </RemoveSpn>
    </CardCart>
  );
};

export default CartProduct;

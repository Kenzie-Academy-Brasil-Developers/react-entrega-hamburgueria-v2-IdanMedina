import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../../providers/cartContext";
import { iProduct } from "../../../../services/api";
import { RemoveSpn } from "../../../../styles/buttons";
import { CardCart, CardCartImg, CardCartInfo } from "../../../../styles/cardCart";

interface iCartProductProps {
  product: iProduct;
}

const CartProduct = ({ product }: iCartProductProps) => {
  const { deleteProduct } = useContext(CartContext);

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
        onClick={(e) => {
          deleteProduct(Number(e.currentTarget.id));
          console.log(e.currentTarget.id);
        }}
      >
        Remover
      </RemoveSpn>
    </CardCart>
  );
};

export default CartProduct;

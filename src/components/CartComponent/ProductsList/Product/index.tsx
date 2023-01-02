import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../../providers/cartContext";
import { iProduct } from "../../../../services/api";
import Button from "../../../../styles/buttons";
import { Card, ImgCard, ImgWrap, InfoWrap, PriceSpan } from "../../../../styles/card";

interface iProductProps {
  product: iProduct;
}

const Product = ({ product }: iProductProps) => {
  const { addProduct } = useContext(CartContext);
  return (
    <Card>
      <ImgWrap>
        <ImgCard src={product.img} alt={product.name} />
      </ImgWrap>
      <InfoWrap>
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <PriceSpan>R$ {product.price.toFixed(2)}</PriceSpan>
        <Button id={product.id} onClick={() => addProduct(product)}>
          Adicionar
        </Button>
      </InfoWrap>
    </Card>
  );
};

export default Product;

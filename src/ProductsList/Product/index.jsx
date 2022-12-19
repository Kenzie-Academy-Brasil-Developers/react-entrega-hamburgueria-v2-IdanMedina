import React from "react";
import Button from "../../styles/buttons";
import { Card, ImgCard, ImgWrap, InfoWrap, PriceSpan } from "../../styles/card";

const Product = ({ product, handleClick }) => {
  return (
    <Card>
      <ImgWrap>
        <ImgCard src={product.img} alt={product.name} />
      </ImgWrap>
      <InfoWrap>
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <PriceSpan>R$ {product.price.toFixed(2)}</PriceSpan>
        <Button id={product.id} onClick={(e) => handleClick(e.target.id)}>
          Adicionar
        </Button>
      </InfoWrap>
    </Card>
  );
};

export default Product;

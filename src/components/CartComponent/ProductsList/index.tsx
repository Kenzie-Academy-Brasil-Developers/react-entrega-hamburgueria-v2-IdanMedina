import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../providers/cartContext";
import { List } from "../../../styles/list";
import Product from "./Product";

const ProductList = () => {
const {products, filteredProducts} = useContext(CartContext)

  return (
    <List>
      {!filteredProducts.length
        ? products.map((product, index) => (
            <Product key={index} product={product}  />
          ))
        : filteredProducts.map((product, index) => (
            <Product key={index} product={product} />
          ))}
    </List>
  );
};

export default ProductList;

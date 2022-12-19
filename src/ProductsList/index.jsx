import React from "react";
import { List } from "../styles/list";
import Product from "./Product";

/* interface iProductsListProps = {
products:
} */

const ProductList = ({
  products,
  handleClick,
  filteredProducts,
}) => {
  return (
    <List>
      {!filteredProducts.length
        ? products.map((product, index) => (
            <Product key={index} product={product} handleClick={handleClick} />
          ))
        : filteredProducts.map((product, index) => (
            <Product key={index} product={product} handleClick={handleClick} />
          ))}
    </List>
  );
};

export default ProductList;

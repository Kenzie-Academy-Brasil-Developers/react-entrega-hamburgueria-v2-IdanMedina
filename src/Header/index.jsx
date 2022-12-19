import React from "react";
import Logo from "./Logo";
import InputSearch from "./InputSearch";
import { HeaderStyled } from "../styles/header";

const Header = ({ filteredProducts, showProducts }) => {
  return (
    <HeaderStyled>
      <Logo />
      <InputSearch
        filteredProducts={filteredProducts}
        showProducts={showProducts}
      />
    </HeaderStyled>
  );
};

export default Header;

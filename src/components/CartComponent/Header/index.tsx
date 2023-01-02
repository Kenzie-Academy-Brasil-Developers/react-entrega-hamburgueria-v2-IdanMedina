import React from "react";
import Logo from "./Logo";
import InputSearch from "./InputSearch";
import { HeaderStyled } from "../../../styles/header";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <InputSearch />
    </HeaderStyled>
  );
};

export default Header;

import React, { useContext, useState } from "react";
import Logo from "./Logo";
import InputSearch from "./InputSearch";
import { HeaderDiv, HeaderStyled } from "../../../styles/header";
import { GetOut, MagnGlass, ShopCart } from "../../../styles/icons";
import InputSearchPop from "./InputSearch/InputPop";
import { UserContext } from "../../../providers/userContext";
import { CartContext } from "../../../providers/cartContext";

const Header = () => {
  const [pop, setPop] = useState<boolean>(false);
  const {logout} = useContext(UserContext);
  const {setModal} = useContext(CartContext);

  function showInput() {
    setPop(true);
  }

  function showModal(){
    setModal(true)
  }

  return (
    <HeaderStyled>
      <Logo />
      <HeaderDiv>
        <InputSearch />
        {pop && <InputSearchPop setPop={setPop} />}
        <MagnGlass onClick={() => showInput()} />
        <ShopCart onClick={() => showModal()}/>
        <GetOut onClick={() => logout()}/>
      </HeaderDiv>
    </HeaderStyled>
  );
};

export default Header;

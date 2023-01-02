import React, { useContext, useState } from "react";
import { CartContext } from "../../../../../providers/cartContext";
import { ButtonInput } from "../../../../../styles/buttons";
import { FormStyledPop } from "../../../../../styles/header";
import { InputSearchStyled } from "../../../../../styles/inputs";

interface iInputPopProps {
  setPop: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputSearchPop = ({ setPop }: iInputPopProps) => {
  const { showProducts } = useContext(CartContext);
  const [data, setData] = useState<string>("");

  function hideInput() {
    setPop(false);
  }

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    hideInput();
    showProducts(data);
  }
  return (
    <FormStyledPop onSubmit={submit}>
      <InputSearchStyled
        type="text"
        placeholder="Digitar Pesquisa"
        onChange={(e) => setData(e.target.value)}
      />
      <ButtonInput type="submit">Pesquisar</ButtonInput>
    </FormStyledPop>
  );
};

export default InputSearchPop;

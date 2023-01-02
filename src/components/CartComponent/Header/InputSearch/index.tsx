import React, { useContext, useState } from "react";
import { CartContext } from "../../../../providers/cartContext";
import { ButtonInput } from "../../../../styles/buttons";
import { FormStyled } from "../../../../styles/header";
import { InputSearchStyled } from "../../../../styles/inputs";

const InputSearch = () => {
  const { showProducts } = useContext(CartContext);
  const [data, setData] = useState<string>("");

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showProducts(data);
  }
  return (
    <FormStyled onSubmit={submit}>
      <InputSearchStyled
        type="text"
        placeholder="Digitar Pesquisa"
        onChange={(e) => setData(e.target.value)}
      />
      <ButtonInput type="submit">Pesquisar</ButtonInput>
    </FormStyled>
  );
};

export default InputSearch;

import React, { useState } from "react";
import { ButtonInput } from "../../styles/buttons";
import { FormStyled } from "../../styles/header";
import { InputSearchStyled } from "../../styles/inputSearch";

const InputSearch = ({ showProducts }) => {
  const [data, setData] = useState("");

  function submit(e) {
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

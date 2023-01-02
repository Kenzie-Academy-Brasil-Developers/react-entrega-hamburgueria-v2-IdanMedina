import styled from "styled-components";
/* import { iInputRegister } from "../components/LoginForm"; */

export const Input = styled.input/* <iInputRegister> */`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.75rem;
  width: 100%;
  padding: 1.25rem 0.9375rem;
  background: var(--color-white);
  border: 0.125rem solid var(--grey-100);
  border-radius: 0.5rem;
`;

export const InputSearchStyled = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0px 10px 0px 15px;
  gap: 115px;
  background: var(--color-white);
  border: 2px solid var(--grey-20);
  border-radius: 8px;
`;

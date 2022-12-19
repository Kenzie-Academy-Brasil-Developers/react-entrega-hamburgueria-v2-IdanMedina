import styled from "styled-components";

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0px 20px;
  gap: 10px;
  background-color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  font-size: 0.875rem;
  font-style: normal;
  color: var(--color-white);
  cursor: pointer;
  &:hover {
    background-color: var(--color-primary-50);
    border-color: var(--color-primary-50);
  }
`;
export const ButtonInput = styled.button`
  position: absolute;
  right: 0.6rem;
  top: 0.6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0px 20px;
  gap: 10px;
  background-color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  font-size: 0.875rem;
  font-style: normal;
  color: var(--color-white);
  cursor: pointer;
  &:hover {
    background-color: var(--color-primary-50);
    border-color: var(--color-primary-50);
  }
`;
export const RemoveBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 0px 20px;
  gap: 10px;
  background-color: var(--grey-20);
  border: 2px solid var(--grey-20);
  border-radius: 0.5rem;
  font-family: inherit;
  font-weight: 600;
  font-size: 1rem;
  font-style: normal;
  color: var(--grey-50);
  cursor: pointer;
  &:hover {
    color: var(--grey-20);
    background-color: var(--grey-50);
    border-color: var(--grey-50);
  }
`;
export const RemoveSpn = styled.span`
  font-family: inherit;
  font-weight: 550;
  font-size: 0.75rem;
  font-style: normal;
  color: var(--grey-50);
  cursor: pointer;
`;

export default Button;

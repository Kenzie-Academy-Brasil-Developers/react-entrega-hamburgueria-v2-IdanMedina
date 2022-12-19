import styled from "styled-components";

export const HeaderStyled = styled.header`
  position:fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 5rem;
  padding: 0.875rem 1rem;
  gap: 14px;
  justify-content: space-between;
  align-items: center;
  background-color: var(--grey-0);

  @media (min-width: 1024px) {
    padding: 0.875rem 2rem;
    flex-direction: row;
  };

  @media (min-width: 1360px) {
    padding: 0.875rem 9rem;
  }
`;
export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
`;
export const FormStyled = styled.form`
  position: relative;
  height: 3.75rem;
  width: 100%;

  @media (min-width: 1024px) {
  width: 20rem;
  }

  @media (min-width: 1360px) {
    width: 23rem;
    }
`;

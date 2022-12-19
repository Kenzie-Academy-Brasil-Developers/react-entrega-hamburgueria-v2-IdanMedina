import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  gap: 1.25rem;
  padding: 10rem 1.25rem 1.25rem 1rem;
  list-style: none;
  overflow-x: auto;

  @media (min-width: 1024px) {
    padding: 7rem 22rem 2.25rem 2rem;
    flex-wrap: wrap;
    overflow-x: visible;
  };

  @media (min-width: 1360px) {
    padding: 7rem 36.0625rem 2.25rem 9rem;
  }
`;

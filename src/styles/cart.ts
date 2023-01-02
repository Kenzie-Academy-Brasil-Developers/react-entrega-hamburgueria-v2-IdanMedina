import styled, { keyframes } from "styled-components";

export const MoveModal = keyframes`
0%{transform: translateY(-70%);
    opacity: 0;
    }
    100%{
        transform: translateY(0);
        opacity:1
    }
`;

export const CartDiv = styled.div`
  margin: 0rem 1rem;
  border-radius: 5px;
  box-shadow: 0 0.25rem 2.5rem -0.625rem rgba(0, 0, 0, 0.25);
  animation: ${MoveModal} 1s ease;
  @media (min-width: 1024px) {
    margin: 0;
    position: fixed;
    top: 7rem;
    right: 2rem;
    width: 20rem;
    max-height: 36rem;
    overflow-y: auto;
  }
  @media (min-width: 1360px) {
    right: 9rem;
    width: 23rem;
  }
`;
export const CartHead = styled.div`
  padding: 1.375rem 1.3125rem;
  color: var(--color-white);
  background: var(--color-primary);
  border-radius: 5px 5px 0px 0px;
`;
export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--grey-0);
  padding: 20px 1.33rem;
  list-style: none;
  gap: 21px;
`;
export const EmptyCartDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--grey-0);
  padding: 4rem 1.33rem;
  list-style: none;
  border-radius: 0px 0px 5px 5px;
  gap: 21px;
  margin-bottom: 2rem;
  & p {
    font-size: 0.875rem;
  }
`;

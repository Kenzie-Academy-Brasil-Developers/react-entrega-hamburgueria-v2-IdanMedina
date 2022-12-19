import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: column;

  min-width: 300px;
  height: 346px;
  background: var(--color-white);
  border: 2px solid var(--grey-20);
  border-radius: 5px;
`;
export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: var(--grey-0);
  width: 100%;
  height: 150px;
`;
export const ImgCard = styled.img`
  object-fit: cover;
  height: 110%;
`;
export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1.67rem 0rem 1.4375rem 1.25rem;
  width: 100%;
  gap: 0.875rem;
`;

export const PriceSpan = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: var(--color-primary);
`;

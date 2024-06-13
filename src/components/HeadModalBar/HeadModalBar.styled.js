import styled from "styled-components";

export const HeadBar = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 5;
  padding-bottom: 24px;
  
`;

export const ButtonClose = styled.button`
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: -10px;
  background: none;
  border: none;
`;

export const TitleDetails = styled.h1`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 10px;
`;

export const ReviewDetails = styled.p`
  line-height: 24px;
  text-decoration-line: underline;
  margin-bottom: 16px;
`;

export const BoxDetails = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;
export const DetailsPrice = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
`;

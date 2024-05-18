// import { Title } from 'pages/HomePage.styled';
import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(17, 18, 19, 0.4);
`;

export const Content = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 20px;
  gap: 24px;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  min-height: 720px;
  min-width: 982px;
  max-width: 80%;
`;
 
export const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: black;
`;

export const ImgDetails = styled.img`
  width: 290px;
  height: 310px;
  width: 100%;
  border-radius: 10px;
`;
export const UlElement = styled.ul`
  display: flex;
  gap :16px;
  margin-bottom: 24px;
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

`
export const DetailsPrice = styled.p`
font-size: 24px;
font-style: normal;
font-weight: 600;
margin-bottom: 24px;
line-height: 30px; 
`;

export const DetailsText = styled.p`
  margin-bottom: 44px;
`;
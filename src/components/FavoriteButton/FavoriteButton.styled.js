import styled from "styled-components";
import { FaHeart } from 'react-icons/fa6';


export const HeartButton = styled.button`
  display: block;
  cursor: pointer;
  padding: 3px;
  border: none;
  background-color: #fff;


`;

export const StyledIcon = styled(FaHeart)`
  width: 24px;
  height: 24px;
  fill: ${props => (props.$status ? '#E44848' : '#ffffff')};
  stroke: ${props => (props.$status ? 'none' : '#101828')};
  stroke-width: ${props => (props.$status ? '0' : '20px')};

  &:hover,
  &:focus {
    stroke: #e44848;
    fill: #e44848;
    transform: scale(1.1);
    transition:
      fill 0.3s ease,
      transform 0.3s ease;
  }
`;
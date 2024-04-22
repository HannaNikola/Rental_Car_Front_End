import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Container = styled.div`

  max-width: 1440px;
  background-color: #fff;
  padding: 20px;
  margin: 0 auto;
  border: 2px solid tomato;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
   justify-content: end;
  gap: 20px;
  padding: 20px 8px;
  margin-bottom: 40px;
  border-bottom: 1px solid orange;
  
`;

export const Linknavigation = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  color: orange;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orange;
  }
`;
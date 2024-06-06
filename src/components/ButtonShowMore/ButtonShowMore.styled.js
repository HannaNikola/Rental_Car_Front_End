import styled from 'styled-components';

export const ButtonEl = styled.button`
  display: block;
  cursor: pointer;
  padding: 16px 40px;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  border: 1px solid #e44848;
  background: #e44848;
  color: #fff;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:focus,
  &:hover {
    border-color: #e44848;
    color: #101828;
    background-color: #fff;
  }
`;

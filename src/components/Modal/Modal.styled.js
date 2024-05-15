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
  height: 720px;
  width: 982px;
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
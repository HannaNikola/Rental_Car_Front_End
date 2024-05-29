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
  flex-direction: column;
  align-items: flex-end;
  min-height: 720px;
  width: 982px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
`;
export const ButtonClose = styled.button`
   cursor:pointer;
   position: absolute;
   top: 40px;
   right: 40px;
   background: none;
   border: none;
   
 `;

 export const ButtonContainer = styled.div`
   display: flex;
   gap: 40px;
   border-bottom: 2px solid rgba(16, 24, 40, 0.2);
 `;

export const ButtonFeaterReviews = styled.button`
  display: block;
  cursor: pointer;

  border-style: hidden;
  background: #fff;

  ${({ $isActive }) =>
    $isActive &&
    `
    border-bottom: 2px solid red;
    color: red;
  `}
`;
import styled from 'styled-components';

export const BoxContainer = styled.div`
  display: flex;
  width: 902px;
  margin-top: 44px;
  
`;

export const BoxContent = styled.div`
  display: flex;
  width: 430px;
  margin-right: 24px;
`;

export const BoxFeature = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
`;

export const TitleFeature = styled.h1`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 24px;
  margin-top:24px;
  
`;

export const BoxItems = styled.ul`
  display: flax;
  width: 430px;

  border-top: 1px solid rgba(16, 24, 40, 0.2);
`;

export const List = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 17px;

  &:first-child {
    margin-top: 24px;
  }
`;

export const ListSpan = styled.span`
 
`;
import styled from 'styled-components';


export const LiElement = styled.li`
  display: flex;
  padding: 24px;
  width: 864px;
  height: 334px;
  align-items: flex-start;

  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);

  background: #fff;
`;

export const Box = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const BoxNamePrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  width: 526px;
`;
export const BoxRating = styled.div`
display: flex;
gap: 16px;
`

export const ImgElement = styled.img`
  width: 290px;
  height: 310px;
  // width: 100%;
  margin-right: 24px;
`;



export const ButtonEl = styled.button`
  padding: 16px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 200px;
  border: 1px solid #e44848;
  background: #e44848;
  color: white;
  
`;
export const ButtonLoadMore = styled.button`
  display: inline-flex;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 200px;
  border: 1px solid rgba(71, 84, 103, 0.2);
  margin-top: 50px;
 
`;


export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 13px;
  margin-right: 248px;
`;

export const TextReview = styled.p`
  text-decoration-line: underline;
  margin-bottom: 192px;
`;

export const TextPrice = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  margin-right: 11px;
`;

export const HeartButton = styled.button`
  display: block;
  cursor: pointer;
  width: 24px;
  height: 24px;
 
`;
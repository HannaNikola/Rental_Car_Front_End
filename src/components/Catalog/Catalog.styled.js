import styled from 'styled-components';

export const Box = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;  
export const LiElement = styled.li`
  display: flex;
  padding: 24px;
  width: 816px;
  min-height: 314px;
  align-items: flex-start;
  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  background: #fff;
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
export const ImgBox = styled.div`
  width: 290px;
  height: 310px;
  margin-right: 24px;
  
`;
export const ImgElement = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  margin-right: 24px;
  border-radius: 10px;
`;



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
export const ButtonLoadMore = styled.button`
  display: block;
  cursor: pointer;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  border: 1px solid rgba(71, 84, 103, 0.2);
  margin-top: 50px;
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


export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 13px;
  
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


export const BoxSvg = styled.div`
display: flex;
align-content: flex-end;
`
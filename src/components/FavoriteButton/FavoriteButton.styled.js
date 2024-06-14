import styled from "styled-components";


export const HeartButton = styled.button`
  display: block;
  cursor: pointer;
  padding: 3px;
  border: none;
  background-color: #fff;

  &:hover .svg-icon,
  &:focus .svg-icon {
    stroke: #e44848;
    fill: #e44848;
    transform: scale(1.1);
    transition:
      fill 0.3s ease,
      transform 0.3s ease;
  }

  // .icon {
  //   display: inline-block;
  //   width: 1em;
  //   height: 1em;
  //   stroke-width: 0;
  //   stroke: currentColor;
  //   fill: currentColor;
  // }
  // .icon-heart {
  //   width: 1.0419921875em;
  // }
`;
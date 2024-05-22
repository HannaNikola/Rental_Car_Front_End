import { createGlobalStyle } from "styled-components";
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
   font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #101828;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px
  font-style: normal;
  line-height: 24px; 
  background: #FFF;
  

  ::-webkit-scrollbar {
  width: 8px; 
  height: 10px; 
}


::-webkit-scrollbar-thumb:hover {
  background: #D9D9D9; 
  border-radius: 7px;
  position: absolute;
  left: 46px;
  top: 174px;
  margin-right: 30px;
}

}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

.active{
  color:red;
}
`;


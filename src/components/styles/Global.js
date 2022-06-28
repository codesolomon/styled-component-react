import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: ${({ theme }) => theme.colors.body};
  color: #222;
  margin: 0;
  font-size: 1.15em;
}

p{
  opacity: 0.6;

}

img{
  max-width: 100%;
}


`;
export default GlobalStyle;

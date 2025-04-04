import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.primary};
    padding: 0;
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;

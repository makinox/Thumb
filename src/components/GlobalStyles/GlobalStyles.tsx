import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  :root {
    --BackgroundPrimary: #fff;
    --TextPrimary: #000;
    --TextSecondary: #cccccc;
  }

  body {
    margin: 0;
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

`;

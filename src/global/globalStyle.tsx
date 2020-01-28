import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', YuGothic,
      'ヒラギノ角ゴ ProN W3', Hiragino Kaku Gothic ProN, Arial, 'メイリオ',
      Meiryo, sans-serif;
  }
  html {
    font-size: 62.5%;
  }
  * {
    flex-shrink: 0;
  }
`;

export default GlobalStyle;

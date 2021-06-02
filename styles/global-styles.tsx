import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans', 'Sans-serif';
  }
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, menu, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    font-size: 14px;
    line-height: 1.4;
    font-family: 'Spoqa Han Sans', 'Sans-serif';
  }
  body {
    /* background-color: #e8eaed; */
    background-color: #000;
    color: #fff;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

   /* Track */
  ::-webkit-scrollbar-track {
    background-color: #aaa;
    border-radius : 3px;
  }

   /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 3px;
  }
`;

export default GlobalStyle;

import baseStyled, { css, CSSProp, ThemedStyledInterface } from 'styled-components';

const sizes: { [key: string]: number } = {
  mobile: 320,
  tablet: 768,
  // desktop: 1024
  desktop: 1200
};

type BackQuoteArgs = string[];

type Media = {
  mobile: (...args: BackQuoteArgs) => CSSProp | undefined;
  tablet: (...args: BackQuoteArgs) => CSSProp | undefined;
  desktop: (...args: BackQuoteArgs) => CSSProp | undefined;
};

const media: Media = {
  mobile: (...args: BackQuoteArgs) => undefined,
  tablet: (...args: BackQuoteArgs) => undefined,
  desktop: (...args: BackQuoteArgs) => undefined
};

Object.keys(sizes).reduce((acc: Media, label: string) => {
  switch (label) {
    case 'desktop':
      acc.desktop = (...args: BackQuoteArgs) => css`
        @media only screen and (min-width: ${sizes.desktop}px) {
          ${args}
        }
      `;
      break;
    case 'tablet':
      acc.tablet = (...args: BackQuoteArgs) => css`
        @media only screen and (max-width: ${sizes.desktop}px) and (min-width: ${sizes.tablet}px) {
          ${args}
        }
      `;
      break;
    case 'mobile':
      acc.mobile = (...args: BackQuoteArgs) => css`
        @media only screen and (max-width: ${sizes.tablet}px) {
          ${args}
        }
      `;
      break;
    default:
      break;
  }
  return acc;
}, media);

const colors = {
  main: '#272A34',
  sub: '#727985',
  black: '#222222',
  gray8: '#888888',
  grayA: '#aaaaaa',
  grayC: '#cacaca',
  grayD: '#dadce0',
  grayE: '#e8eaed',
  grayF: '#f5f5f5',
  background: '#050505',
  border: '#4d4f55',
  button: 'rgba(159,22,0,.6)',
  hover: '#f8b700',
  primary: '#170e09',
  secondary: '#ebebeb',
  success: '#137333',
  danger: '#ea3012',
  warning: '#fdcc5e',
  info: '#f7b10a',
  white: '#ffffff'
};

const secondaryColors = {};
const fontFamily = ['SpoqaHanSans', 'Arial', 'Courier'].join(',');
const fontSizes = {
  h1: '32px',
  h2: '24px',
  h3: '20px',
  subtitle16: '16px', //  h4
  body14: '14px', //  h5
  cation12: '12px' //  h6
};

const theme = {
  colors,
  fontSizes,
  fontFamily,
  secondaryColors,
  media
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;

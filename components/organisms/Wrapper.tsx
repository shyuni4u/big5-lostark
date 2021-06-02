import React from 'react';
import styled from 'styled-components';
import '../../locales/i18n';

import GlobalStyle from '../../styles/global-styles';
import theme from '../../styles/theme';
import { ThemeProvider } from '../../styles/themed-components';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledToastContainer = styled(ToastContainer).attrs({
  className: 'toast-container',
  toastClassName: 'toast',
  bodyClassName: 'body',
  progressClassName: 'progress'
})`
  /* .toast-container */
  height: 32px;

  /* .toast is passed to toastClassName */
  .toast {
    border-radius: 20px;
    min-height: auto;
  }

  button[aria-label='close'] {
    /* display: none; */
  }

  /* .body is passed to bodyClassName */
  .body {
    text-indent: 10px;
  }

  /* .progress is passed to progressClassName */
  .progress {
  }
`;

const StyledWrapper = styled.div`
  max-width: 460px;
  width: 100%;
  height: 100%;
  margin: 0px auto;
  position: relative;
  ${({ theme }) => theme.media.tablet`
    width: 100%;
  `}
  ${({ theme }) => theme.media.mobile`
    width: 100%;
  `}
`;

export const Wrapper: React.FC = ({ children }) => {
  return (
    <>
      <StyledToastContainer />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledWrapper>{children}</StyledWrapper>
      </ThemeProvider>
    </>
  );
};

export default Wrapper;

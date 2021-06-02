import React, { CSSProperties } from 'react';
import styled, { keyframes } from 'styled-components';

export type LoaderProps = {
  /**
   * CSS
   */
  style?: CSSProperties;
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const StyledLoader = styled.div`
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid ${({ theme }) => theme.colors.black};
  width: 120px;
  height: 120px;
  -webkit-animation: ${spin} 2s linear infinite; /* Safari */
  opacity: 0.7;
  animation: ${spin} 2s linear infinite;
`;

/**
 * Primary UI component for user interaction
 */
export const Loader: React.FC<LoaderProps> = ({ style = {}, ...props }) => {
  return <StyledLoader style={style} {...props}></StyledLoader>;
};

export default Loader;

import React, { CSSProperties } from 'react';
import styled from 'styled-components';

export type ButtonProps = {
  /**
   * CSS
   */
  style?: CSSProperties;
  /**
   * Is primary
   */
  primary?: boolean;
  /**
   * Is disabled
   */
  disabled?: boolean;
  /**
   * onClick
   */
  onClick?: () => void;
};

const StyledButton = styled.button`
  line-height: 1.5;
  font-weight: 400;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid #c77e19;
  color: #f7b10a;
  min-width: 180px;
  margin: 10px;
  padding: 12px 30px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: #b06601;
    color: #ffd36b;
    outline-width: 0;
  }
  -webkit-transition: 0.2s;
  transition: 0.2s;
  &.primary {
    background: rgba(159, 22, 0, 0.6);
    border: 1px solid #ea3012;
    &:hover {
      background: #9f1600;
      color: #ffd36b;
      outline-width: 0;
    }
  }
`;

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  style = {},
  disabled = false,
  ...props
}) => {
  return (
    <StyledButton
      style={style}
      type={'button'}
      disabled={disabled}
      className={primary ? 'primary' : ''}
      {...props}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;

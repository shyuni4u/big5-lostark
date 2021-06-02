import React, { useEffect, CSSProperties } from 'react';
import styled, { keyframes } from 'styled-components';

export type ModalProps = {
  /**
   * CSS
   */
  style?: CSSProperties;
  /**
   * Show / Hide
   */
  show?: boolean;
  /**
   * Use default close button
   */
  useClose?: boolean;
  /**
   * Close function
   */
  onClose: () => void;
};

type ModalShowProps = {
  show: boolean;
};
const StyledModalBackground = styled.div<ModalShowProps>`
  display: ${(prop) => (prop.show ? 'inherit' : 'none')};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.main};
  opacity: 0.5;
`;
const modalFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const StyledModal = styled.div<ModalShowProps>`
  display: ${(prop) => (prop.show ? 'inherit' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  max-width: calc(100vw - 20px);
  max-height: 100vh;
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.background};
  overflow: auto;
  animation: ${modalFade} 0.8s;
`;
const StyledModalContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const StyledModalClose = styled.button.attrs({
  type: 'button'
})`
  position: absolute;
  display: flex;
  align-items: center;
  top: -0.6rem;
  right: -1.2rem;
  width: 2rem;
  height: 2rem;
  font-size: 1.8rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  & > span {
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
    transition: 0.2s;
  }
`;

export const Modal: React.FC<ModalProps> = ({
  style = {},
  show = false,
  useClose = false,
  onClose = () => undefined,
  ...props
}) => {
  useEffect(() => {
    if (show) {
      const body = document.body;
      body.style.height = '100vh';
      body.style.overflowY = 'hidden';
    } else {
      const body = document.body;
      body.style.position = '';
      body.style.top = '';
      body.style.height = '';
      body.style.overflowY = '';
    }
  }, [show]);

  return (
    <>
      <StyledModalBackground
        show={show}
        onClick={() => onClose()}
      ></StyledModalBackground>
      <StyledModal show={show} style={style} {...props}>
        <StyledModalContent>
          <StyledModalClose
            style={{ display: useClose ? 'flex' : 'none' }}
            onClick={() => onClose()}
          >
            <span>&times;</span>
          </StyledModalClose>
          {props.children}
        </StyledModalContent>
      </StyledModal>
    </>
  );
};

export default Modal;

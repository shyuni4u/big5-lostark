import React, { CSSProperties } from 'react';
import styled from 'styled-components';

export type PanelProps = {
  /**
   * CSS
   */
  style?: CSSProperties;
};

const StyledPanel = styled.div`
  display: flex;
  flex: 1 1 auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.white};
  width: calc(100% - 20px);
  height: 100%;
  padding: 15px;
  margin: 0px 10px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  & h2.panel-title {
    font-size: 27px;
    color: #f8b700;
    line-height: 1.5;
    font-family: Semplicita Pro, Open Sans, Arial, Helvetica, sans-serif;
    text-shadow: 0 0 1px transparent, 0 1px 2px rgba(0, 0, 0, 0.8);
    font-weight: 700;
  }

  & h3.panel-sub-title {
    font-size: 15px;
    line-height: 1.5;
    font-family: Open Sans, Arial, Helvetica, sans-serif;
    color: #ebdec2;
    text-shadow: 0 0 1px transparent, 0 1px 2px rgba(0, 0, 0, 0.8);
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 0;
    text-transform: uppercase;
  }

  & div.panel-content {
    font-size: 13px;
    line-height: 1.5;
    font-family: Open Sans, Arial, Helvetica, sans-serif;
    color: #ebdec2;
    text-shadow: 0 0 1px transparent, 0 1px 2px rgba(0, 0, 0, 0.8);
    font-weight: 400;
    margin: 13px auto 10px;
    overflow: hidden;
  }
`;
const StyledPanelBox = styled.div`
  position: static;
  top: 0;
  bottom: 0;
  right: 10%;
  left: 10%;
`;
const StyledPanelContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1600px;
  position: relative;
  top: 0;
  -webkit-transform: none;
  transform: none;
  text-align: center;
  width: 100%;
  color: #fff;
  z-index: 0;
`;

/**
 * Primary UI component for user interaction
 */
export const Panel: React.FC<PanelProps> = ({ style = {}, ...props }) => {
  return (
    <StyledPanel style={style} {...props}>
      <StyledPanelBox>
        <StyledPanelContent>{props.children}</StyledPanelContent>
      </StyledPanelBox>
    </StyledPanel>
  );
};

export default Panel;

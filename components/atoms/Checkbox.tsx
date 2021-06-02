import React from 'react';
import styled from 'styled-components';

export type CheckboxProps = {
  /**
   * Attribute [name] of <input> tag
   */
  name?: string;
  /**
   * Label for checkbox button
   */
  label?: string;
  /**
   * Value of <input> tag
   */
  value?: string | number;
  /**
   * If you make this 'true' the UI will change to the radio type
   */
  radio?: boolean;
  /**
   * Checked
   */
  checked?: boolean;
  /**
   * Disabled
   */
  disabled?: boolean;
  /**
   * CSS (label)
   */
  style?: React.CSSProperties;
  /**
   * Optional change handler
   */
  onChange?: () => void;
};

const StyledCheckboxLabel = styled.label<CheckboxProps>`
  display: inline-block;
  position: relative;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSizes.body14};
  color: ${(props) =>
    props.disabled
      ? ({ theme }) => theme.colors.grayA
      : ({ theme }) => theme.colors.black};
  text-align: left;
  line-height: 20px;
  width: 100%;
  height: 36px;
  padding: 8px 0;
  border-radius: 4px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
`;

const StyledCheckboxText = styled.span<CheckboxProps>`
  position: absolute;
  top: 8px;
  left: 25px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSizes.body14};
  color: ${(props) =>
    props.disabled
      ? ({ theme }) => theme.colors.grayA
      : ({ theme }) => theme.colors.black};
  text-align: left;
  line-height: 20px;
  margin: 0;
`;

const StyledCheckbox = styled.input.attrs({
  type: 'checkbox'
})<CheckboxProps>`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

const StyledCheckboxMarkIn = styled.span<CheckboxProps>`
  position: absolute;
  top: calc(8px + 3px);
  left: calc(0px + 7px);
  width: 7px;
  height: 12px;
  border: solid
    ${(props) =>
      props.disabled
        ? ({ theme }) => theme.colors.grayE
        : ({ theme }) => theme.colors.primary};
  border-radius: 2px;
  margin-right: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  display: ${(props) => (props.checked ? 'inherit' : 'none')};
`;

const StyledCheckboxMarkOut = styled.span<CheckboxProps>`
  position: absolute;
  top: 8px;
  left: 0px;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  margin-right: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  border: solid 1px
    ${(props) =>
      props.disabled
        ? ({ theme }) => theme.colors.grayE
        : props.checked
        ? ({ theme }) => theme.colors.primary
        : ({ theme }) => theme.colors.Gray8};
`;

const StyledRadioButtonMarkIn = styled.span<CheckboxProps>`
  position: absolute;
  top: calc(8px + 4px);
  left: calc(0px + 4px);
  width: 12px;
  height: 12px;
  border: solid
    ${(props) =>
      props.disabled
        ? ({ theme }) => theme.colors.grayE
        : ({ theme }) => theme.colors.primary};
  border-radius: 50%;
  background-color: ${(props) =>
    props.disabled
      ? ({ theme }) => theme.colors.grayE
      : ({ theme }) => theme.colors.primary};
  border-width: 0;
  display: ${(props) => (props.checked ? 'inherit' : 'none')};
`;

const StyledRadioButtonMarkOut = styled.span<CheckboxProps>`
  position: absolute;
  top: 8px;
  left: 0px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  border: solid 1px
    ${(props) =>
      props.disabled
        ? ({ theme }) => theme.colors.grayE
        : props.checked
        ? ({ theme }) => theme.colors.primary
        : ({ theme }) => theme.colors.Gray8};
`;

export const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
  return (
    <StyledCheckboxLabel style={props.style}>
      <StyledCheckbox
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        checked={props.checked}
        onChange={props.onChange}
      />
      {props.radio && (
        <>
          <StyledRadioButtonMarkOut
            checked={props.checked}
            disabled={props.disabled}
          />
          <StyledRadioButtonMarkIn
            checked={props.checked}
            disabled={props.disabled}
          />
        </>
      )}
      {!props.radio && (
        <>
          <StyledCheckboxMarkOut
            checked={props.checked}
            disabled={props.disabled}
          />
          <StyledCheckboxMarkIn
            checked={props.checked}
            disabled={props.disabled}
          />
        </>
      )}
      <StyledCheckboxText disabled={props.disabled}>
        {props.label}
      </StyledCheckboxText>
    </StyledCheckboxLabel>
  );
};

export default Checkbox;

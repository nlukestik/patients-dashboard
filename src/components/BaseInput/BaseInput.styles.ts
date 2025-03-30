import theme from '@/theme';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  position: relative;

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `};

  input[type='number'] {
    appearance: textfield;
    -moz-appearance: textfield;
  }
`;

export const Label = styled.label`
  display: flex;
  font-size: 16px;
  color: ${theme.defaults.black};
  transition: ${theme.transitions.default};
  padding-inline: 5px;

  ${Wrapper} input:focus + & {
    color: ${theme.colors.primary};
  }
`;

export const ErrorMessage = styled.p`
  color: ${theme.colors.red};
  font-size: 14px;
  padding-left: 5px;
`;

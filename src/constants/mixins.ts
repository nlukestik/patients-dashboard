import theme from '@/theme';
import styled, { css } from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  outline-color: transparent;
  outline: none;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
`;

export const InputStyles = css`
  padding: 8px 15px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: ${theme.border.radius.main};
  background-color: ${theme.background.secondary};
  font-size: 16px;
  transition: ${theme.transitions.default};
  font-family: inherit;
  width: 100%;

  &:focus {
    border-color: ${theme.colors.primary};
    outline: none;
  }

  &::placeholder {
    color: ${theme.colors.lightGrey};
  }
`;

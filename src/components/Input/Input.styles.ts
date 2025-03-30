import styled, { css } from 'styled-components';
import theme from '@/theme';
import { InputStyles } from '@/constants/mixins';

export const IconWrapper = styled.div`
  position: absolute;
  left: 15px;
  top: 9px;
  display: grid;
  place-content: center;
  pointer-events: none;
`;

export const Input = styled.input<{ $hasError?: boolean; $hasIcon?: boolean }>`
  ${InputStyles}

  ${({ $hasIcon }) =>
    $hasIcon &&
    css`
      padding-left: 45px !important;
    `};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${({ $hasError }) =>
    $hasError &&
    css`
      border-color: red !important;
    `};

  @media ${theme.breakpoints.mobile} {
    padding: 5px 10px;
  }
`;

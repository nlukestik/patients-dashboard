import styled, { css } from 'styled-components';
import { InputStyles } from '@/constants/mixins';

export const TextArea = styled.textarea<{ $disableResize: boolean; $hasError?: boolean }>`
  ${InputStyles}
  width: auto;
  ${({ $disableResize }) =>
    $disableResize &&
    css`
      resize: none;
    `}

  ${({ $hasError }) =>
    $hasError &&
    css`
      border-color: red !important;
    `};
`;

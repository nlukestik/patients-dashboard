import { Button } from '@/constants/mixins';
import theme from '@/theme';
import styled, { css } from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 10px;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 25px;
  background-color: ${theme.defaults.white};
  opacity: 0;
  transition: ${theme.transitions.default};

  @media ${theme.breakpoints.laptop} {
    height: auto;
    width: 50rem;
    border-radius: ${theme.border.radius.main};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const Overlay = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  margin: auto;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: ${theme.transitions.default};

  @media ${theme.breakpoints.laptop} {
    padding-block: 50px;
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      /* opacity: 1;
      transition: ${theme.transitions.default}; */

      &,
      ${ModalWrapper} {
        opacity: 1;
        transition: ${theme.transitions.default};
      }
    `}
`;

export const CloseButton = styled(Button)`
  display: grid;
  place-content: center;
  position: absolute;
  top: 12px;
  right: 12px;
  height: 24px;
  width: 24px;
`;

export const Header = styled.h1`
  margin: 0;
  font-weight: 500;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const FooterButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 30px;
  width: 100%;
  font-family: inherit;

  @media ${theme.breakpoints.laptop} {
    width: auto;
    min-width: 120px;
  }
`;

export const AcceptButton = styled(FooterButton)<{ $isDisabled?: boolean }>`
  background-color: ${theme.colors.primary};
  color: ${theme.defaults.white};

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      cursor: not-allowed;
      pointer-events: none;
      opacity: 0.4;
    `}
`;

export const CancelButton = styled(FooterButton)`
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  padding-block: 9px;
`;

export const Footer = styled.div<{ $hideCancel?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  width: 100%;
  padding-top: 10px;

  @media ${theme.breakpoints.laptop} {
    justify-content: flex-end;
  }

  @media ${theme.breakpoints.mobile} {
    ${({ $hideCancel }) =>
      $hideCancel &&
      css`
        ${AcceptButton} {
          width: 100%;
        }
      `}
  }
`;

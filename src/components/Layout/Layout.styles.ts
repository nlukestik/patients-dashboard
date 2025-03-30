import theme from '@/theme';
import styled, { css } from 'styled-components';

export const PAGE_HEADER_HEIGHT = 76;
export const SIDEBAR_TOGGLER_BUTTON_SIZE = 30;
export const SIDEBAR_TOGGLER_TOP_PX = PAGE_HEADER_HEIGHT / 2 - SIDEBAR_TOGGLER_BUTTON_SIZE / 2;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: ${theme.background.primary};
  overflow: hidden;
`;

const TogglerButton = css`
  display: grid;
  place-content: center;
  position: absolute;
  height: 30px;
  width: 30px;
  top: ${SIDEBAR_TOGGLER_TOP_PX}px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

export const SidebarTogglerWrapper = styled.div`
  display: none;

  @media ${theme.breakpoints.laptop} {
    ${TogglerButton}
    border-radius: 50%;
    background-color: ${theme.background.secondary};
    border: ${theme.border.main};
    right: -15px;
    transform: rotate(90deg);

    svg {
      transition: ${theme.transitions.default};
    }
  }
`;

export const MobileSidebarToggler = styled.div`
  ${TogglerButton}
  left: 20px;

  @media ${theme.breakpoints.laptop} {
    display: none;
  }
`;

export const SidebarWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${theme.defaults.white};
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 5;
  transition: ${theme.transitions.default};

  @media ${theme.breakpoints.laptop} {
    position: relative;
    height: auto;
    border-right: ${theme.border.main};
  }

  ${({ $isOpen }) =>
    $isOpen
      ? css`
          width: 100%;

          @media ${theme.breakpoints.laptop} {
            width: 250px;
            min-width: 250px;
            ${SidebarTogglerWrapper} {
              svg {
                transform: rotateX(0deg);
              }
            }
          }
        `
      : css`
          width: 0;
          min-width: 0;
          ${MobileSidebarToggler} {
            display: none;
          }

          @media ${theme.breakpoints.laptop} {
            width: 40px;
            min-width: 40px;
            ${SidebarTogglerWrapper} {
              svg {
                transform: rotateX(180deg);
              }
            }
          }
        `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContentHeader = styled.div`
  position: relative;
  padding-inline: 40px;
  border-bottom: ${theme.border.main};
`;

export const HeaderTitle = styled.h2`
  margin-block: 20px;
  text-align: center;

  @media ${theme.breakpoints.laptop} {
    text-align: left;
  }
`;

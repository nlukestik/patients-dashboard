import { Button } from '@/constants/mixins';
import theme from '@/theme';
import { ToastConfigByType, ToastTypesEnum } from '@/types/common';
import styled, { css } from 'styled-components';

const toastConfigByType: ToastConfigByType = {
  [ToastTypesEnum.SUCCESS]: {
    background: theme.background.success,
    color: theme.defaults.black,
  },
  [ToastTypesEnum.ERROR]: {
    background: theme.background.error,
    color: theme.defaults.white,
  },
};

export const Wrapper = styled.div<{ $type: ToastTypesEnum }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding-block: 15px;
  padding-inline: 20px 30px;
  border: ${theme.border.main};
  border-radius: ${theme.border.radius.main};
  transition: ${theme.transitions.default};
  pointer-events: auto;

  ${({ $type }) => {
    const { background, color } = toastConfigByType[$type];
    toastConfigByType[$type].background;
    return css`
      background-color: ${background};
      color: ${color};

      #close-icon path {
        stroke: ${color};
      }
    `;
  }};
`;

export const Overlay = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px 10px;
  pointer-events: none;
`;

export const CloseButton = styled(Button)`
  display: grid;
  place-content: center;
  position: absolute;
  top: 5px;
  right: 5px;
  height: 15px;
  width: 15px;
`;

export const Message = styled.span`
  font-size: 16px;
  width: 100%;
`;

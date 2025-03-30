import theme from '@/theme';
import styled, { css } from 'styled-components';

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
`;

export const ActionButton = styled.div`
  display: flex;

  #expand-icon,
  #edit-icon {
    transition: ${theme.transitions.default};
  }

  #edit-icon {
    opacity: 0;
  }
`;

export const MoreInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  text-align: justify;
  padding-inline: 5px;

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    width: fit-content;
    &:hover {
      font-weight: 600;
    }
  }
`;

export const CardWrapper = styled.div<{ $isExpanded?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${theme.background.primary};
  padding: 10px;
  border: ${theme.border.main};
  border-radius: ${theme.border.radius.main};
  text-align: center;
  transition: ${theme.transitions.default};
  position: relative;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    cursor: pointer;

    #edit-icon {
      opacity: 1;
    }
  }

  ${({ $isExpanded }) =>
    $isExpanded
      ? css`
          background-color: ${theme.background.tertiary};

          #expand-icon {
            transition: ${theme.transitions.default};
            transform: rotateX(180deg);
          }

          ${MoreInfoWrapper} {
            margin-top: 10px;
            opacity: 1;
            max-height: 1000px;
            transition:
              margin 0.1s ease,
              max-height 0.1s ease,
              opacity 0.2s ease;
          }
        `
      : css`
          ${MoreInfoWrapper} {
            margin-top: 0;
            max-height: 0;
            opacity: 0;
            transition:
              margin 0.2s ease,
              max-height 0.2s ease,
              opacity 0.2s ease;
          }
        `}
`;

export const MainInfoWrapper = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`;

export const PatientMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 4px;
  align-items: flex-start;
  text-align: left;
  padding-right: 60px;
`;

export const PatientName = styled.span<{ $isEmpty: boolean }>`
  font-size: 16px;
  font-weight: 600;
  color: ${({ $isEmpty }) => ($isEmpty ? theme.text.grey : theme.defaults.black)};
`;

export const PatientDetails = styled.p`
  font-size: 14px;
  color: ${theme.text.grey};
`;

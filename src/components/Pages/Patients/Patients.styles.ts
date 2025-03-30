import { Button } from '@/constants/mixins';
import theme from '@/theme';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  padding-right: 5px;
  row-gap: 16px;
  overflow-y: hidden;
  background-color: ${theme.background.secondary};
`;

export const GridContainer = styled.div<{ $isEmpty: boolean }>`
  display: grid;
  gap: 10px;
  justify-content: center;
  align-items: start;
  width: 100%;
  overflow-y: auto;
  padding-right: 15px;

  ${({ $isEmpty }) =>
    !$isEmpty
      ? css`
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

          @media ${theme.breakpoints.mobile} {
            grid-template-columns: repeat(1, 1fr);
          }

          @media ${theme.breakpoints.tablet} {
            grid-template-columns: repeat(2, 1fr);
          }

          @media ${theme.breakpoints.desktop} {
            grid-template-columns: repeat(3, 1fr);
          }
        `
      : css`
          height: 100%;
        `}
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-right: 15px;
  column-gap: 16px;
  background-color: ${theme.background.primary};
  border: ${theme.border.main};
  border-radius: ${theme.border.radius.main};
`;

export const AddPatientButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.primary};
  border-radius: 30px;
  padding: 10px 15px;
  column-gap: 5px;
  font-family: inherit;
  white-space: nowrap;
`;

export const AddPatientButtonLabel = styled.span`
  font-size: 15px;
  color: ${theme.defaults.white};
  padding-right: 4px;

  @media ${theme.breakpoints.mobile} {
    display: none;
  }
`;

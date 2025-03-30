import theme from '@/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 100%;
`;

export const SearchWrapper = styled.div`
  @media ${theme.breakpoints.tablet} {
    max-width: 400px;
  }
  @media ${theme.breakpoints.laptop} {
    max-width: 500px;
  }
`;

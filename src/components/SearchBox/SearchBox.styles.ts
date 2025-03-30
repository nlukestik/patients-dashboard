import styled from 'styled-components';
import CommonInput from '../Input';
import theme from '@/theme';

export const Input = styled(CommonInput)`
  input {
    border: ${theme.border.main};
    border-radius: 100px;

    @media ${theme.breakpoints.mobile} {
      padding-block: 8px;
    }
  }
`;

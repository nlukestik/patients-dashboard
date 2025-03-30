import styled from 'styled-components';
import theme from '@/theme';
import { MainInfoWrapper as BaseMainInfoWrapper, PatientMainInfo } from '../PatientCard/PatientCard.styles';
import { Wrapper as InputWrapper } from '@/components/BaseInput/BaseInput.styles';

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const MainInfoWrapper = styled(BaseMainInfoWrapper)`
  column-gap: 20px;

  @media ${theme.breakpoints.mobile} {
    flex-direction: column;
  }
`;

export const MainInfo = styled(PatientMainInfo)`
  padding-right: 0;
  row-gap: 6px;
  justify-content: center;

  .patientNameInput {
    width: 100%;
  }

  @media ${theme.breakpoints.mobile} {
    ${InputWrapper} {
      width: 100%;
    }
  }
`;

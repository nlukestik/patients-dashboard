import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Message = styled.h2`
  color: ${({ theme }) => theme.colors.lightGrey};
`;

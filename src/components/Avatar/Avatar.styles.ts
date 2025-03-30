import { ImageProps } from 'next/image';
import styled from 'styled-components';

export const Wrapper = styled.div<{ $size: ImageProps['height'] }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ $size }) => `${$size}px`};
  min-height: ${({ $size }) => `${$size}px`};
  width: ${({ $size }) => `${$size}px`};
  min-width: ${({ $size }) => `${$size}px`};
  border-radius: 50%;
  border: 1px solid black;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.1);
`;

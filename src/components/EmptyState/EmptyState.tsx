import Image from 'next/image';
import * as SC from './EmptyState.styles';

type Props = {
  message?: string;
};

const EmptyState = ({ message = 'Not found' }: Props) => {
  return (
    <SC.Wrapper>
      <SC.Message>{message}</SC.Message>
      <Image src='/images/empty-search.svg' alt='empty-search' width='300' height='200' />
    </SC.Wrapper>
  );
};

export default EmptyState;

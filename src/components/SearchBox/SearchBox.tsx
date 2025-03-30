import { ComponentProps } from 'react';
import Input from '../Input';
import * as SC from './SearchBox.styles';
import SearchIcon from '../icons/SearchIcon';
import theme from '@/theme';

type Props = Pick<ComponentProps<typeof Input>, 'value' | 'onChange' | 'placeholder'>;

const SearchBox = ({ ...props }: Props) => {
  return <SC.Input showError={false} icon={<SearchIcon color={theme.colors.lightGrey} />} {...props} name='search' />;
};

export default SearchBox;

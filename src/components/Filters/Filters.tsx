import { ComponentProps, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import SearchBox from '../SearchBox';
import * as SC from './Filters.styles';

type Props = {
  onChange?: (filters: Record<string, string>) => void;
  searchInputProps?: ComponentProps<typeof SearchBox>;
};

const Filters = ({ searchInputProps, onChange }: Props) => {
  const filters = useForm({
    defaultValues: {
      search: '',
    },
  });

  const searchValue = filters.watch('search');

  useEffect(() => {
    onChange?.({ search: searchValue });
  }, [onChange, searchValue]);

  return (
    <FormProvider {...filters}>
      <SC.Wrapper>
        <SC.SearchWrapper>
          <SearchBox {...searchInputProps} />
        </SC.SearchWrapper>
      </SC.Wrapper>
    </FormProvider>
  );
};

export default Filters;

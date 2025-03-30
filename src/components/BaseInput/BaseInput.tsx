import { useFormContext } from 'react-hook-form';
import * as SC from './BaseInput.styles';
import { PropsWithChildren, useEffect, useMemo } from 'react';

export type BaseInputProps = {
  label?: string;
  fullWidth?: boolean;
  className?: string;
  error?: string;
  showError?: boolean;
};

const BaseInput = ({
  label,
  fullWidth = true,
  error,
  showError = true,
  className,
  children,
}: PropsWithChildren<BaseInputProps>) => {
  return (
    <SC.Wrapper className={className} $fullWidth={fullWidth}>
      {!!label && <SC.Label>{label}:</SC.Label>}
      {children}
      {showError && !!error && <SC.ErrorMessage>{error}</SC.ErrorMessage>}
    </SC.Wrapper>
  );
};

export default BaseInput;

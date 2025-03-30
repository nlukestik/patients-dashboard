import { InputHTMLAttributes } from 'react';
import BaseInput, { BaseInputProps } from '../BaseInput/BaseInput';
import * as SC from './Input.styles';
import { useFormContext } from 'react-hook-form';
import useInputError from '@/hooks/useInputError';

type Props = InputHTMLAttributes<HTMLInputElement> &
  BaseInputProps & {
    // name: string;
    icon?: React.ReactNode;
  };

const Input = ({ label, className, fullWidth, showError, name, onChange, icon, ...props }: Props) => {
  const { register } = useFormContext();
  const error = useInputError(name);

  return (
    <BaseInput label={label} className={className} fullWidth={fullWidth} error={error} showError={showError}>
      {!!icon && <SC.IconWrapper>{icon}</SC.IconWrapper>}
      <SC.Input $hasError={!!error} $hasIcon={!!icon} {...(!name ? {} : register(name))} {...props} />
    </BaseInput>
  );
};

export default Input;

import { TextareaHTMLAttributes } from 'react';
import BaseInput, { BaseInputProps } from '../BaseInput/BaseInput';
import * as SC from './TextAreaInput.styles';
import { useFormContext } from 'react-hook-form';
import useInputError from '@/hooks/useInputError';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> &
  Omit<BaseInputProps, 'error'> & {
    name: string;
    disableResize?: boolean;
  };

const TextAreaInput = ({ label, name, disableResize = false, className, showError, ...props }: Props) => {
  const { register } = useFormContext();
  const error = useInputError(name);

  return (
    <BaseInput label={label} className={className} showError={showError} error={error}>
      <SC.TextArea $hasError={!!error} {...register(name)} {...props} $disableResize={disableResize} />
    </BaseInput>
  );
};

export default TextAreaInput;

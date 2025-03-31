import { useCallback, useState } from 'react';
import { ToastDurationsEnum, ToastNotification, ToastTypesEnum } from '@/types/common';

type Props = Partial<ToastNotification> & {
  /** Toast duration in miliseconds. */
  duration?: number | ToastDurationsEnum;
};

export const useNotification = ({
  duration = ToastDurationsEnum.SHORT,
  type = ToastTypesEnum.SUCCESS,
  message = 'Success!',
}: Props = {}) => {
  const [notification, setNotification] = useState<ToastNotification | null>();

  const showNotification = useCallback(
    (_message?: string, _type?: ToastTypesEnum, _duration?: Props['duration']) => {
      setNotification({ message: _message || message, type: _type || type });

      setTimeout(() => {
        setNotification(null);
      }, _duration || duration);
    },
    [duration, message, type]
  );

  const closeNotification = useCallback(() => {
    setNotification(null);
  }, []);

  return { notification, showNotification, closeNotification };
};

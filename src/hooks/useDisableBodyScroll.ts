import { useEffect } from 'react';

const useDisableBodyScroll = (condition: boolean) => {
  useEffect(() => {
    document.body.style.overflow = condition ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [condition]);
};

export default useDisableBodyScroll;

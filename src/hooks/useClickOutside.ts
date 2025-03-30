import { useCallback, useEffect } from 'react';

interface UseClickOutsideProps {
  ref: React.RefObject<HTMLElement>;
  callback: () => void;
  enable?: boolean;
}

export const useClickOutside = ({ ref, callback, enable = true }: UseClickOutsideProps) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref?.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    },
    [callback, ref]
  );

  useEffect(() => {
    if (enable) {
      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }

    return undefined;
  }, [handleClickOutside, enable]);
};

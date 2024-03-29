import { useCallback, useEffect } from 'react';

const useDebounceFunc = (func: () => void, delay: number, deps: any[]) => {
  const callback = useCallback(func, deps);

  useEffect(() => {
    const timer = setTimeout(() => callback(), delay);
    return () => clearTimeout(timer);
  }, [callback, delay]);
};

export default useDebounceFunc;

'use client';

import { useState } from 'react';

import useUpdated from '@/packages/hooks/useUpdated';

/**
 * custom hooks to create debounced value
 * @param value - value to debounce
 * @param delay - debounce delay
 */
function useDebounceValue<T>(value: T, delay = 750) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useUpdated(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounceValue;

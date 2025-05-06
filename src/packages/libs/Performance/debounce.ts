/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useCallback, useRef } from 'react';

export function withDebounce<T extends any[], R>(func: (...args: T) => R, delay: number) {
  let timeout: NodeJS.Timeout;
  return (...args: T): R => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
    return func(...args);
  };
}

export function useDebounce<T extends any[]>(func: (...args: T) => void, delay: number) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  return useCallback((...args: T) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      func(...args);
    }, delay);
  }, [func, delay]);
}

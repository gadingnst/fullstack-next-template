/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useCallback, useRef } from 'react';

export function withThrottle<T extends any[], R>(func: (...args: T) => R, delay: number) {
  let lastCall = 0;
  return (...args: T): R | void => {
    const now = Date.now();
    if (now - lastCall < delay) return;
    lastCall = now;
    return func(...args);
  };
}

export function useThrottle<T extends any[]>(func: (...args: T) => void, delay: number) {
  const lastCallRef = useRef<number>(0);
  return useCallback((...args: T) => {
    const now = Date.now();
    if (now - lastCallRef.current < delay) return;
    lastCallRef.current = now;
    func(...args);
  }, [func, delay]);
}

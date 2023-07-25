'use client';

/* eslint-disable react-hooks/exhaustive-deps */
import { type RefObject, useCallback } from 'react';

import useMounted from './useMounted';

/**
 * React hook that listens for clicks outside of a given refs.
 * @param callback - The callback to run when user clicks outside of the elements
 * @param refs - The array of ref element to listen to
 * @returns {void} - void
 */
function useOutsideClick<T extends Node>(callback: (target: HTMLElement) => void, refs: RefObject<T>[]): void {
  const handleOutsideClick = useCallback((event: MouseEvent) => {
    const isOutsideRefs = refs.every(ref => {
      const refElement = ref?.current;
      const isOutside = refElement && !refElement?.contains(event?.target as Node);
      return isOutside;
    });
    if (isOutsideRefs) callback(event.target as HTMLElement);
  }, []);
  useMounted(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });
}

export default useOutsideClick;

import { RefObject } from 'react';

import useMounted from './useMounted';

type Reference<T> = RefObject<T> | 'window';

interface ScrollListenerParams<T> {
  scrollY: number;
  scrollX: number;
  element: T | null;
}

export type ScrollListenerCallback<T extends Element> = (scrollPosition: ScrollListenerParams<T>) => void;

function getReference <T>(reference: Reference<T>) {
  const isReactRef = reference !== 'window';
  const element = (reference as RefObject<T>)?.current;
  return { isReactRef, element };
}

export function isScrollAtEndX(scrollX: number, element: HTMLElement|'window', tolerance = 50) {
  if (element === 'window') {
    return window.innerWidth + window.scrollX >= document.documentElement.scrollWidth - tolerance;
  }
  return scrollX + element.clientWidth >= element.scrollWidth - tolerance;
}

export function isScrollAtEndY(scrollY: number, element: HTMLElement|'window', tolerance = 50) {
  if (element === 'window') {
    return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - tolerance;
  }
  return scrollY + element.clientHeight >= element.scrollHeight - tolerance;
}

/**
 * Hooks for handling scroll events on a given reference.
 * @param callback - Event handler for scroll events.
 * @param reference - The ref of the element to listen to.
 */
function useScrollListener<T extends Element>(
  callback: (scrollPosition: ScrollListenerParams<T>) => void,
  reference: Reference<T>
) {
  function handleScroll() {
    const { isReactRef, element } = getReference(reference);
    const scrollY = (isReactRef ? element?.scrollTop : window.scrollY) ?? 0;
    const scrollX = (isReactRef ? element?.scrollLeft : window.scrollX) ?? 0;
    callback({ scrollX, scrollY, element });
  }

  useMounted(() => {
    const { isReactRef, element } = getReference(reference);
    const target = isReactRef ? element : window;
    target?.addEventListener('scroll', handleScroll);
    return () => {
      target?.removeEventListener('scroll', handleScroll);
    };
  });
}

export default useScrollListener;

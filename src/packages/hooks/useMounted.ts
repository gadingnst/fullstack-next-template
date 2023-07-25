'use client';

/* eslint-disable react-hooks/exhaustive-deps */
import { type EffectCallback, useEffect } from 'react';

/**
 *
 * @param callback - The callback to run when the component is mounted
 * @returns {void} - void
 */
function useMounted(callback: EffectCallback): void {
  useEffect(callback, []);
}

export default useMounted;

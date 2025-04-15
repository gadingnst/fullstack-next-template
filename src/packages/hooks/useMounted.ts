import { EffectCallback, useEffect } from 'react';

/**
 *
 * @param callback - The callback to run when the component is mounted
 * @returns {void} - void
 */
function useMounted(callback: EffectCallback): void {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, []);
}

export default useMounted;

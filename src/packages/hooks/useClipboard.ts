'use client';

import { useState, useCallback } from 'react';

/**
 * custom hooks to create Copy Clipboard
 * @param value - value to copy
 */
function useClipboard(value: string, delay = 1500) {
  const [isCopied, setCopied] = useState(false);

  const copyHandler = useCallback(() => {
    if (isCopied) return;
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, delay);
  }, [isCopied, value, delay]);

  return {
    isCopied,
    copyHandler
  };
}

export default useClipboard;

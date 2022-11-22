import { useState, useCallback } from 'react';

/**
 * custom hooks to create Copy Clipboard
 * @param value - value to copy
 */
function useClipboard(value: string) {
  const [isCopied, setCopied] = useState(false);

  const copyHandler = useCallback(() => {
    if (isCopied) return;
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }, [isCopied, value]);

  return {
    isCopied,
    copyHandler
  };
}

export default useClipboard;

import { ReactNode, useState, useCallback } from 'react';

/**
 * custom hooks to create Copy Clipboard
 * @param value - value to copy
 * @param node - ReactNode to render in component
 */
function useClipboard(value: string, node: ReactNode|((value: string) => ReactNode)) {
  const [isCopied, setCopied] = useState(false);

  const copyHandler = useCallback(() => {
    if (isCopied) return;
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }, [isCopied, value]);

  /** Must be rendered in Component */
  const ClipboardNode = typeof node === 'function' ? node(value) : node;

  return {
    isCopied,
    copyHandler,
    ClipboardNode
  };
}

export default useClipboard;

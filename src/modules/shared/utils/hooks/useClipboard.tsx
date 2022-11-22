import { useRef, ReactNode, Fragment, useState } from 'react';

/**
 * custom hooks to create Copy Clipboard
 * @param value - value to copy
 * @param node - ReactNode to render in component
 */
function useClipboard(value: string, node: ReactNode|((value: string) => ReactNode)) {
  const refAddress = useRef<HTMLInputElement>();
  const [isCopied, setCopied] = useState(false);

  const copyHandler = () => {
    if (isCopied) return;
    const copyText = refAddress.current;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  /** Must be rendered in Component */
  const ClipboardNode = (
    <Fragment>
      <input
        readOnly
        disabled
        type="text"
        value={value}
        ref={refAddress}
        style={{ display: 'none' }}
      />
      {typeof node === 'function' ? node(value) : node}
    </Fragment>
  );

  return {
    isCopied,
    copyHandler,
    ClipboardNode
  };
}

export default useClipboard;

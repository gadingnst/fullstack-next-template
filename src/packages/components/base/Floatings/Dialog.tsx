'use client';

import { type PropsWithChildren, type ReactNode, useCallback } from 'react';

import Overlay from '@/packages/components/base/Floatings/Overlay';
import cn from '@/packages/utils/cn';

interface Props {
  title: ReactNode;
  show: boolean;
  onClose: () => void;
  className?: string;
  closeable?: boolean;
  closeOnBlur?: boolean;
}

function Dialog(props: PropsWithChildren<Props>) {
  const {
    title,
    show,
    className,
    children,
    closeable,
    closeOnBlur,
    onClose = () => void 0,
    ...otherProps
  } = props;

  const handleClose = useCallback(() => {
    if (closeOnBlur) onClose?.();
  }, [closeOnBlur, onClose]);

  return (
    <Overlay show={show} onClick={handleClose}>
      <div
        {...otherProps}
        className={cn([
          'shadow-xl rounded-xl p-4 relative min-w-[328px]',
          'bg-white dark:bg-slate-700',
          className
        ])}
      >
        <div className="flex justify-between items-center mb-3 font-semibold">
          {typeof title !== 'string' ? title : (
            <p className="text-lg">{title}</p>
          )}
          {closeable && (
            <button
              className={cn([
                'right-2 top-2 px-2 rounded',
                'hover:bg-gray-300 dark:hover:bg-gray-500'
              ])}
              onClick={onClose}
            >
              x
            </button>
          )}
        </div>
        {children}
      </div>
    </Overlay>
  );
}

export default Dialog;

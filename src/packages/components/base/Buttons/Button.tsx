'use client';

import cxm from '@/packages/utils/cxm';
import { FunctionComponent, HTMLAttributes, PropsWithChildren } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  block?: boolean;
  text?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: FunctionComponent<PropsWithChildren<Props>> = (props) => {
  const {
    children,
    className = '',
    block = false,
    text = '',
    onClick = () => void 0,
    disabled = false,
    ...attrProps
  } = props;

  const handleClick = () => {
    if (disabled) return;
    onClick();
  };

  return (
    <button
      role="button"
      {...attrProps}
      disabled={disabled}
      onClick={handleClick}
      className={cxm([
        'bg-blue-500 text-white py-2 px-4 rounded-lg',
        'disabled:cursor-not-allowed disabled:opacity-60',
        'text-center relative',
        block && 'w-full',
        className
      ])}
    >
      {children || text}
    </button>
  );
};

export default Button;

'use client';

import { type PropsWithChildren, type ButtonHTMLAttributes, forwardRef } from 'react';

import cxm from '@/packages/utils/cxm';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  block?: boolean;
  text?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>((props, ref) => {
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
      ref={ref}
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
});

Button.displayName = 'Button';

export default Button;

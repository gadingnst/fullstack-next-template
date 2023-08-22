'use client';

import type { HTMLAttributes, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import BrowserRender from '@/packages/components/base/Displays/BrowserRender';
import cn from '@/packages/utils/cn';

import styles from './Overlay.module.css';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * Base Component to create Modal
 * See `Dialog` component for example usage
 */
function Overlay(props: PropsWithChildren<Props>) {
  const {
    show,
    children,
    className = '',
    ...attrProps
  } = props;

  const Component = (
    <div
      {...attrProps}
      className={cn([
        styles.overlay,
        'bg-black bg-opacity-75',
        className
      ])}
    >
      {children}
    </div>
  );

  return (
    <BrowserRender>
      {show && createPortal(Component, document.body)}
    </BrowserRender>
  );
}

export default Overlay;

import type { FunctionComponent, HTMLAttributeAnchorTarget } from 'react';

import Button, { type Props as ButtonProps } from '@/packages/components/base/Buttons/Button';
import NextLink from '@/packages/components/base/Navigations/NextLink';
import cxm from '@/packages/utils/cxm';

export interface Props extends ButtonProps {
  href: string;
  target?: HTMLAttributeAnchorTarget;
}

export const ButtonLink: FunctionComponent<Props> = (props) => {
  const {
    href,
    target,
    disabled,
    className,
    block = false,
    children,
    text,
    ...otherProps
  } = props;

  if (disabled || !href) {
    return (
      <Button
        {...otherProps}
        block={block}
        className={className}
        disabled={disabled}
      >
        {children || text}
      </Button>
    );
  }

  return (
    <NextLink
      href={href}
      target={target}
      disabled={disabled}
      className={cxm([
        'bg-blue-500 text-white py-2 px-4 rounded-lg',
        'text-center relative',
        'hover:underline underline-offset-4 decoration-dashed',
        block && 'w-full',
        className
      ])}
    >
      {children || text}
    </NextLink>
  );
};

export default ButtonLink;

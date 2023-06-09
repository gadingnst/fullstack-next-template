'use client';

import { FunctionComponent, HTMLAttributeAnchorTarget } from 'react';
import Link from 'next/link';
import Button, { Props as ButtonProps } from '@/packages/components/base/Buttons/Button';
import clsxm from '@/packages/utils/clsxm';

export interface Props extends ButtonProps {
  href: string;
  block?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

export const ButtonLink: FunctionComponent<Props> = (props) => {
  const {
    href,
    disabled,
    block = false,
    ...otherProps
  } = props;

  const Content = <Button {...otherProps} block={block} disabled={disabled} />;

  if (disabled || !href) {
    return Content;
  }

  return (
    <Link
      href={href}
      className={clsxm([
        block ? 'w-full' : ''
      ])}
    >
      {Content}
    </Link>
  );
};

export default ButtonLink;

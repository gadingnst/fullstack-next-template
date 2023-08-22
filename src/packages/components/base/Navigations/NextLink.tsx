import Link, { type LinkProps } from 'next/link';
import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';

import cn from '@/packages/utils/cn';

type NextLinkProps = PropsWithChildren<Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>
  & LinkProps
  & React.RefAttributes<HTMLAnchorElement>>;

export interface Props extends NextLinkProps {
  disabled?: boolean;
}

function NextLink(props: Props) {
  const { disabled = false, className } = props;
  return (
    <Link
      {...props}
      className={cn([
        disabled && 'opacity-60 pointer-events-none cursor-not-allowed',
        className
      ])}
    />
  );
}

export default NextLink;

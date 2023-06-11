import Link, { type LinkProps } from 'next/link';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import cxm from '@/packages/utils/cxm';

type NextLinkProps = PropsWithChildren<Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>
  & LinkProps
  & React.RefAttributes<HTMLAnchorElement>>;

interface Props extends NextLinkProps {
  disabled?: boolean;
}

function NextLink(props: Props) {
  const { disabled = false, className } = props;
  return (
    <Link
      {...props}
      className={cxm([
        disabled && 'opacity-60 pointer-events-none cursor-not-allowed',
        className
      ])}
    />
  );
}

export default NextLink;

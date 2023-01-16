import { FunctionComponent, PropsWithChildren } from 'react';
import NextHead from 'next/head';

import { SITE_NAME } from '@/configs/env';

export interface Props {
  title: string;
}

const Head: FunctionComponent<PropsWithChildren<Props>> = (props) => {
  const {
    title = SITE_NAME,
    children
  } = props;

  return (
    <NextHead>
      <title>{title}</title>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      {children}
    </NextHead>
  );
};

export default Head;

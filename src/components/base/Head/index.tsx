import { FunctionComponent, PropsWithChildren } from 'react';
import NextHead from 'next/head';

interface Props {
  title?: string;
}

const Head: FunctionComponent<PropsWithChildren<Props>> = (props) => {
  const { children } = props;
  return (
    <NextHead>
      {children}
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </NextHead>
  );
};

export default Head;

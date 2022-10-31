import { NextPage } from 'next';
import { FunctionComponent, Fragment, PropsWithChildren, useMemo } from 'react';

import Head from '@/components/base/Head';
import { SITE_NAME } from '@/utils/config';

export interface Props {
  title: string;
}

export type UnknownProps = Record<string, unknown>;

const Layout: FunctionComponent<PropsWithChildren<Props>> = (props) => {
  const {
    children,
    title: titleProps
  } = props;
  const title = titleProps?.includes(SITE_NAME) ? titleProps : `${titleProps} | ${SITE_NAME}`;
  return (
    <Fragment>
      <Head title={title} />
      <div className="flex flex-col min-h-screen">
        {children}
      </div>
    </Fragment>
  );
};

/**
 * Higher-order component that wraps the provided component in a `<Layout>` component.
 * Of course, you can create your new Layout with this template!
 * @param PageComponent - The page component to wrap with the layout
 * @param layoutProps - The props to pass to the layout
 * @returns - NextPage
 */
export const withPageLayout = <T extends UnknownProps>(
  PageComponent: NextPage<T>, layoutProps: Props|((pageProps: T) => Props)
) => {
  const LayoutPage: FunctionComponent<T> = (pageProps) => {
    const layoutPropsWithPageProps = useMemo(() => {
      return typeof layoutProps === 'function'
        ? layoutProps(pageProps) : layoutProps;
    }, [pageProps]);

    return (
      <Layout {...layoutPropsWithPageProps}>
        <PageComponent {...pageProps} />
      </Layout>
    );
  };
  return LayoutPage;
};

export default Layout;

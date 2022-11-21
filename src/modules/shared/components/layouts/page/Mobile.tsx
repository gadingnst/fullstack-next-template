import clsxm from '@/modules/shared/utils/clsxm';
import type { NextPage } from 'next';
import { FunctionComponent, useMemo } from 'react';
import { MainLayoutPage, LayoutConfigProps, UnknownProps } from './Main';

interface MobileLayoutConfigProps extends LayoutConfigProps {
  classNameMobile?: string;
}

/**
 * @param PageComponent - The page component to wrap with the layout
 * @param layoutProps - The props to pass to the layout
 * @returns - NextPage
 */
export const withMobileLayoutPage = <T extends UnknownProps>(PageComponent: NextPage<T>, layoutProps?: MobileLayoutConfigProps|((pageProps: T) => MobileLayoutConfigProps)) => {
  const MobileLayoutPage: FunctionComponent<T> = (pageProps) => {
    const layoutPropsWithPageProps = useMemo(() => {
      return typeof layoutProps === 'function'
        ? layoutProps(pageProps) : layoutProps;
    }, [pageProps]);

    const {
      classNameMobile
    } = layoutPropsWithPageProps;

    return (
      <MainLayoutPage {...layoutPropsWithPageProps}>
        <div
          className={clsxm([
            'relative max-w-[500px] mx-auto w-full flex flex-col min-h-screen shadow-xl',
            classNameMobile
          ])}
        >
          <PageComponent {...pageProps} />
        </div>
      </MainLayoutPage>
    );
  };
  return MobileLayoutPage;
};

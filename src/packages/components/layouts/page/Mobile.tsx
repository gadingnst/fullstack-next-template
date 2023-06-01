import { FunctionComponent, PropsWithChildren } from 'react';
import clsxm from '@/packages/utils/clsxm';

import { MainLayoutPage, LayoutConfigProps, UnknownProps } from './Main';
import { NextPageComponent } from '@/types/global';

interface MobileLayoutConfigProps extends LayoutConfigProps {
  classNameMobile?: string;
}

const MobileLayout: FunctionComponent<PropsWithChildren<MobileLayoutConfigProps>> = (props) => {
  const {
    classNameMobile,
    children,
    ...layoutPropsWithPageProps
  } = props;
  return (
    <MainLayoutPage {...layoutPropsWithPageProps}>
      <div
        className={clsxm([
          'relative max-w-[500px] mx-auto w-full flex flex-col min-h-screen shadow-xl',
          classNameMobile
        ])}
      >
        {children}
      </div>
    </MainLayoutPage>
  );
};

/**
 * @param PageComponent - The page component to wrap with the layout
 * @param layoutProps - The props to pass to the layout
 * @returns - NextPage
 */
export const withMobileLayoutPage = <T extends UnknownProps>(PageComponent: NextPageComponent<T>, layoutProps: MobileLayoutConfigProps) => {
  const MobileLayoutPage: FunctionComponent<T> = (pageProps) => {
    const {
      classNameMobile
    } = layoutProps;
    return (
      <MainLayoutPage {...layoutProps}>
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

export default MobileLayout;

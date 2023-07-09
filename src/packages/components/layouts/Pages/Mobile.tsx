import { FunctionComponent, PropsWithChildren } from 'react';
import cxm from '@/packages/utils/cxm';

import { MainLayoutPage, LayoutConfigProps, UnknownProps } from './Main';
import { NextPageComponent } from '@/@types/global';

interface MobileLayoutConfigProps extends LayoutConfigProps {
  classNameMobile?: string;
}

const MobileLayoutPage: FunctionComponent<PropsWithChildren<MobileLayoutConfigProps>> = (props) => {
  const {
    classNameMobile,
    children,
    ...layoutWithPageProps
  } = props;
  return (
    <MainLayoutPage {...layoutWithPageProps}>
      <div
        className={cxm([
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
export const withMobileLayoutPage = <T extends UnknownProps>(PageComponent: NextPageComponent<T>, layoutProps?: MobileLayoutConfigProps) => {
  const MobileLayout: FunctionComponent<T> = (pageProps) => {
    return (
      <MobileLayoutPage {...layoutProps ?? {}}>
        <PageComponent {...pageProps} />
      </MobileLayoutPage>
    );
  };
  return MobileLayout;
};

export default MobileLayoutPage;

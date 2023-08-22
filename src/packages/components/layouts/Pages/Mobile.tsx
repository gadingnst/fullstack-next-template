import { FunctionComponent, PropsWithChildren } from 'react';

import { NextPageComponent } from '@/@types/global';
import cn from '@/packages/utils/cn';

import { MainLayoutPage, LayoutConfigProps, UnknownProps } from './Main';

type MobileLayoutConfigProps = LayoutConfigProps;

const MobileLayoutPage: FunctionComponent<PropsWithChildren<MobileLayoutConfigProps>> = (props) => {
  const {
    children,
    className,
    ...layoutWithPageProps
  } = props;
  return (
    <MainLayoutPage
      {...layoutWithPageProps}
      className={cn([
        'relative max-w-[500px] mx-auto w-full shadow-xl',
        className
      ])}
    >
      {children}
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

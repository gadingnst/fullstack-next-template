import { FunctionComponent, Fragment, PropsWithChildren } from 'react';
import cxm from '@/packages/utils/cxm';
import { NextPageComponent } from '@/@types/global';

export interface LayoutConfigProps {
  className?: string;
}

export type UnknownProps = Record<string, any>;

export const MainLayoutPage: FunctionComponent<PropsWithChildren<LayoutConfigProps>> = (props) => {
  const {
    children,
    className
  } = props;
  return (
    <Fragment>
      <div className={cxm(['flex flex-col min-h-screen', className])}>
        {children}
      </div>
    </Fragment>
  );
};

/**
 * Higher-order component that wraps the provided component in a `<MainLayoutPage>` component.
 * Of course, you can create your new Layout with this template!
 * @param PageComponent - The page component to wrap with the layout
 * @param layoutProps - The props to pass to the layout
 * @returns - NextPage
 */
export const withMainLayoutPage = <T extends UnknownProps>(PageComponent: NextPageComponent<T>, layoutProps?: LayoutConfigProps) => {
  const LayoutPage: FunctionComponent<T> = (pageProps) => {
    return (
      <MainLayoutPage {...layoutProps}>
        <PageComponent {...pageProps} />
      </MainLayoutPage>
    );
  };
  return LayoutPage;
};

export default MainLayoutPage;

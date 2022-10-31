import type { FunctionComponent, PropsWithChildren } from 'react';
import { LazyLoadComponent, LazyLoadComponentProps, trackWindowScroll } from 'react-lazy-load-image-component';

export type Props = LazyLoadComponentProps;

export { trackWindowScroll };

const LazyLoad: FunctionComponent<PropsWithChildren<Props>> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <LazyLoadComponent {...otherProps}>
      {children}
    </LazyLoadComponent>
  );
};

export default LazyLoad;

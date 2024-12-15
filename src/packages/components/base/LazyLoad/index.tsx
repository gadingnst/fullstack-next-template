import type { FunctionComponent, PropsWithChildren } from 'react';

import LazyLoadComponent, { LazyLoadComponentProps } from '@/packages/libs/LazyLoadImage/components/LazyLoadComponent';
import trackWindowScroll from '@/packages/libs/LazyLoadImage/hoc/trackWindowScroll';

export type Props = LazyLoadComponentProps;

/** @see https://www.npmjs.com/package/react-lazy-load-image-component#using-trackwindowscroll-hoc-to-improve-performance */
export { trackWindowScroll };

/** @see https://www.npmjs.com/package/react-lazy-load-image-component#lazyloadcomponent-usage */
const LazyLoad: FunctionComponent<PropsWithChildren<Props>> = (props) => {
  const { children, ...otherProps } = props;
  return (
    <LazyLoadComponent {...otherProps}>
      {children}
    </LazyLoadComponent>
  );
};

export default LazyLoad;

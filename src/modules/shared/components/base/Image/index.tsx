import type { ImageProps } from 'next/image';
import { FunctionComponent, ReactEventHandler, useCallback, useMemo, useState } from 'react';
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component';

import clsxm from '@/modules/shared/utils/clsxm';
import { DEFAULT_PLACEHOLDER, useSize } from './helpers';
import styles from './index.module.css';

type Props = LazyLoadImageProps & {
  src: ImageProps['src'];
  effect?: 'blur'|'opacity';
  size?: string|number;
  onClick?: () => void;
};

const Image: FunctionComponent<Props> = (props) => {
  const {
    src,
    effect,
    size,
    style,
    className,
    wrapperClassName,
    placeholderSrc,
    onError,
    ...lazyloadProps
  } = props;

  const imgSrc = useMemo(() => (
    (src as any)?.src ?? src ?? placeholderSrc ?? DEFAULT_PLACEHOLDER
  ), [src, placeholderSrc]);

  const blurDataURL = (src as any)?.blurDataURL;
  const [source, setSource] = useState<string>(imgSrc);

  const placeholder = useMemo(() => {
    const placeholderDefault = blurDataURL ?? DEFAULT_PLACEHOLDER;
    return (!placeholderSrc || placeholderSrc === source) ? placeholderDefault : placeholderSrc;
  }, [source, placeholderSrc, blurDataURL]);

  const { width, height } = useSize(size, {
    height: lazyloadProps.height,
    width: lazyloadProps.width
  });

  const handleError: ReactEventHandler<HTMLImageElement> = useCallback((event) => {
    setSource(placeholder);
    onError?.(event);
  }, [onError, placeholder]);

  return (
    <LazyLoadImage
      useIntersectionObserver
      decoding="async"
      loading="lazy"
      {...lazyloadProps}
      effect={effect}
      src={source}
      placeholderSrc={placeholder}
      className={className}
      onError={handleError}
      style={{ ...style, height, width }}
      wrapperClassName={clsxm(styles.wrapper, wrapperClassName)}
    />
  );
};

Image.defaultProps = {
  className: '',
  style: {},
  effect: 'opacity',
  onClick: () => void 0
};

export default Image;

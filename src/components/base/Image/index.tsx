import type { ImageProps } from 'next/image';
import { FunctionComponent, ReactEventHandler, useCallback, useMemo, useState } from 'react';
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component';

import clsxm from '@/utils/helpers/clsxm';
import { DEFAULT_PLACEHOLDER } from './constant';
import styles from './index.module.css';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
interface Props extends LazyLoadImageProps {
  src: ImageProps['src'];
  withLoader?: boolean;
  onClick?: () => void;
}

const Image: FunctionComponent<Props> = (props) => {
  const {
    src,
    onClick,
    withLoader,
    ...lazyloadProps
  } = props;

  const {
    height,
    width,
    style,
    className,
    wrapperClassName,
    placeholderSrc,
    afterLoad,
    onError
  } = lazyloadProps;

  const imgSrc = useMemo(() => (
    (src as any)?.src ?? src ?? placeholderSrc ?? DEFAULT_PLACEHOLDER
  ), [src, placeholderSrc]);

  const blurDataURL = (src as any)?.blurDataURL;
  const [source, setSource] = useState<string>(imgSrc);
  const [loading, setLoading] = useState(true);

  const placeholder = useMemo(() => {
    const placeholderDefault = blurDataURL ?? DEFAULT_PLACEHOLDER;
    return (!placeholderSrc || placeholderSrc === source) ? placeholderDefault : placeholderSrc;
  }, [source, placeholderSrc]);

  const handleLoad = useCallback(() => {
    setLoading(false);
    afterLoad?.();
  }, [afterLoad]);

  const handleError: ReactEventHandler<HTMLImageElement> = useCallback((event) => {
    setSource(placeholder);
    onError?.(event);
  }, [onError, placeholder]);

  const renderLoader = useMemo(() => {
    if (withLoader && loading) {
      return <span className={clsxm(styles.loader, 'absolute')} />;
    }
    return null;
  }, [withLoader, loading]);

  return (
    <span
      className="flex items-center justify-center"
      style={{ height, width }}
      onClick={onClick}
    >
      <LazyLoadImage
        useIntersectionObserver
        decoding="async"
        loading="lazy"
        {...lazyloadProps}
        src={source}
        placeholderSrc={placeholder}
        afterLoad={handleLoad}
        effect="blur"
        className={className}
        onError={handleError}
        style={{ ...style, height, width }}
        wrapperClassName={clsxm(
          loading ? styles.blur : '',
          wrapperClassName
        )}
      />
      {renderLoader}
    </span>
  );
};

Image.defaultProps = {
  className: '',
  style: {},
  withLoader: false,
  onClick: () => void 0
};

export default Image;

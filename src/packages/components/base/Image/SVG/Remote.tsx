import { FunctionComponent, useCallback, useMemo, useRef } from 'react';
import ReactInlineSVG, { Props as ReactInlineSVGProps } from 'react-inlinesvg';

import { DEFAULT_PLACEHOLDER, useSize } from '../helpers';

export type Props = ReactInlineSVGProps & {
  src: string;
  alt?: string;
  size?: string|number;
  placeholderSrc?: string;
  onClick?: () => void;
};

/**
 * Handle inline SVG with dynamic path/url.
 * (Note: Used to handle dynamic external/internal SVG assets)
 * @example <SVGRemote src="/assets/path/to/your.svg" size={32} />
 * @see https://www.npmjs.com/package/react-inlinesvg
 */
const SVGRemote: FunctionComponent<Props> = (props) => {
  const {
    src,
    size,
    alt,
    className,
    placeholderSrc,
    ...svgProps
  } = props;

  const imgRef = useRef<HTMLImageElement>(null);

  const placeholder = useMemo(() => {
    return placeholderSrc || DEFAULT_PLACEHOLDER;
  }, [placeholderSrc]);

  const source = useMemo(() => {
    return src || placeholder;
  }, [src, placeholder]);

  const { width, height } = useSize(size, {
    height: svgProps.height,
    width: svgProps.width
  });

  const onError = useCallback(() => {
    if (imgRef.current) {
      imgRef.current.src = placeholder;
    }
  }, [placeholder]);

  return (
    <ReactInlineSVG
      cacheRequests
      {...svgProps}
      src={source}
      className={className}
      width={width}
      height={height}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={source}
        onError={onError}
        className={className}
        width={width}
        height={height}
        alt={alt}
        style={{ width, height }}
      />
    </ReactInlineSVG>
  );
};

SVGRemote.defaultProps = {
  className: '',
  alt: 'SVG Fallback Image',
  placeholderSrc: '',
  size: 32,
  onClick: () => void 0
};

export default SVGRemote;

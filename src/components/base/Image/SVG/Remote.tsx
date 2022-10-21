import clsxm from '@/utils/helpers/clsxm';
import { FunctionComponent, useCallback, useMemo, useRef } from 'react';
import ReactInlineSVG, { Props as ReactSVGProps } from 'react-inlinesvg';
import { DEFAULT_PLACEHOLDER } from '../constant';

export type Props = ReactSVGProps & {
  src: string;
  size?: number;
  alt?: string;
  wrapperClassName?: string;
  placeholder?: string;
  onClick?: () => void;
};

/**
 * Handle inline SVG with dynamic path/url.
 * (Note: Used to handle dynamic external/internal SVG assets)
 * @example <SVGRemote src="/assets/path/to/your.svg" size={32} />
 */
const SVGRemote: FunctionComponent<Props> = (props) => {
  const {
    src,
    size,
    alt,
    className,
    wrapperClassName,
    onClick,
    placeholder: placeholderParam,
    ...svgProps
  } = props;

  const imgRef = useRef<HTMLImageElement>(null);

  const placeholder = useMemo(() => {
    return placeholderParam || DEFAULT_PLACEHOLDER;
  }, [placeholderParam]);

  const source = useMemo(() => {
    return src || placeholder;
  }, [src, placeholder]);

  const { width, height } = useMemo(() => ({
    width: svgProps.width || size,
    height: svgProps.height || size
  }), [svgProps.width, svgProps.height, size]);

  const onError = useCallback(() => {
    if (imgRef.current) {
      imgRef.current.src = placeholder;
    }
  }, []);

  return (
    <span
      className={clsxm('flex justify-center items-center', wrapperClassName)}
      style={{ width, height }}
      onClick={onClick}
    >
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
    </span>
  );
};

SVGRemote.defaultProps = {
  className: '',
  wrapperClassName: '',
  alt: 'SVG Fallback Image',
  placeholder: '',
  size: 32,
  onClick: () => void 0
};

export default SVGRemote;

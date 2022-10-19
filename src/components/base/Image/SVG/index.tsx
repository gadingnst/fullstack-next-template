import type { ImageProps } from 'next/image';
import { FunctionComponent, SVGAttributes, useMemo } from 'react';
import clsxm from '@/utils/helpers/clsxm';

export interface Props extends SVGAttributes<SVGElement> {
  src: ImageProps['src'];
  size?: number;
  className?: string;
  wrapperClassName?: string;
  onClick?: () => void;
}

/**
 * Handle SVG static import into inline React Component
 * PS: Only be used with internal SVG asset
 * @example <SVG src={ImportedFromStaticInternalSVGAsset} size={32} />
 */
const SVG: FunctionComponent<Props> = (props) => {
  const {
    src: SVGComponent,
    size,
    className,
    wrapperClassName,
    onClick,
    ...svgProps
  } = props;

  const { width, height } = useMemo(() => ({
    width: svgProps.width || size,
    height: svgProps.height || size
  }), [svgProps.width, svgProps.height, size]);

  return (
    <span
      className={clsxm('flex justify-center items-center', wrapperClassName)}
      style={{ width, height }}
      onClick={onClick}
    >
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <SVGComponent
        {...svgProps}
        className={className}
        width={width}
        height={height}
      />
    </span>
  );
};

SVG.defaultProps = {
  className: '',
  wrapperClassName: '',
  size: 32,
  onClick: () => void 0
};

export default SVG;

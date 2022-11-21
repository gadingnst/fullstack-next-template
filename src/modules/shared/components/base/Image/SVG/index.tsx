import type { ImageProps } from 'next/image';
import { FunctionComponent, SVGAttributes } from 'react';
import { useSize } from '../helpers';

export interface Props extends SVGAttributes<SVGElement> {
  src: ImageProps['src'];
  className?: string;
  size?: string|number;
  onClick?: () => void;
}

/**
 * Handle inline SVG with static internal import.
 * (Note: Used to handle static internal SVG assets)
 * @example
 * import YourSVG from '@/assets/to/path/your.svg';
 * <SVG src={YourSVG} size={32} />
 */
const SVG: FunctionComponent<Props> = (props) => {
  const {
    src: SVGComponent,
    size,
    ...svgProps
  } = props;

  const { width, height } = useSize(size, {
    height: svgProps.height,
    width: svgProps.width
  });

  return (
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    /* @ts-ignore */
    <SVGComponent
      {...svgProps}
      width={width}
      height={height}
    />
  );
};

SVG.defaultProps = {
  className: '',
  size: 32,
  onClick: () => void 0
};

export default SVG;

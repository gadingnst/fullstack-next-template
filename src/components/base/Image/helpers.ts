import { useMemo } from 'react';

type Props = {
  width: string|number;
  height: string|number;
};

export const DEFAULT_PLACEHOLDER = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';

export const useSize = (size: string|number, { width, height }: Props) => useMemo(() => ({
  width: width || size,
  height: height || size
}), [height, width, size]);

'use client';

import { useMemo } from 'react';

type Props = {
  width?: string|number;
  height?: string|number;
};

export const DEFAULT_PLACEHOLDER = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';

export const useSize = (size: string|number|undefined, { width, height }: Props) => useMemo(() => ({
  width: width || size || 'auto',
  height: height || size || 'auto'
}), [height, width, size]);

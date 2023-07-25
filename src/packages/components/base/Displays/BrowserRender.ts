'use client';

import { type PropsWithChildren, type ReactNode, useState } from 'react';

import useMounted from '@/packages/hooks/useMounted';

interface Props {
  placeholder?: ReactNode;
}

function BrowserRender({ children, placeholder }: PropsWithChildren<Props>) {
  const [onClient, setOnClient] = useState(false);

  useMounted(() => {
    setOnClient(true);
  });

  return onClient ? children : placeholder;
}

export default BrowserRender;

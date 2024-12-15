'use client';

import { PropsWithChildren, useState } from 'react';

import type { NextPageProps } from '@/@types/global';
import { getAboutQuran } from '@/modules/About/api/about';
import Message from '@/modules/About/components/Message';
import Image from '@/packages/components/base/Images/Image';
import Link from '@/packages/components/base/Navigations/Link';
import useMounted from '@/packages/hooks/useMounted';

import styles from './AboutWrapper.client.module.css';

interface Props {
  searchParams: NextPageProps['searchParams'];
}

function AboutWrapper(props: PropsWithChildren<Props>) {
  const { children, searchParams } = props;
  const [maintainer, setMaintainer] = useState('');

  useMounted(() => {
    const Aborter = new AbortController();
    getAboutQuran(Aborter.signal).then((data) => {
      setMaintainer(data.maintaner);
    });
    return () => {
      Aborter.abort();
    };
  });

  return (
    <div className="flex justify-center items-center w-full mb-10">
      <main className="mt-10">
        <h1 className="text-center text-xl mb-10">
          {maintainer || 'Loading...'}
        </h1>

        <div className={styles.avatar}>
          <Image
            effect="blur"
            src="https://gading.dev/assets/images/authors/gading-talks.jpeg"
            size={200}
            alt="Sutan Gading Fadhillah Nasution"
            wrapperClassName="rounded-full overflow-hidden cursor-grab active:cursor-grabbing"
          />
        </div>

        <div className="flex items-center justify-center my-8 flex-col">
          <p>
            Passed Query:
          </p>
          <p>
            {JSON.stringify(searchParams)}
          </p>
          <Message messages={searchParams.text?.toString()} />
          <Link href="/" className="text-fuchsia-400 text-center mt-5">
            Back to Homepage
          </Link>
        </div>

        {children}
      </main>
    </div>
  );
}

export default AboutWrapper;

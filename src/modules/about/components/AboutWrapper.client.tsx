'use client';

import { PropsWithChildren, useState } from 'react';
import Link from 'next/link';

import Image from '@/packages/components/base/Images/Image';

import useMounted from '@/packages/hooks/useMounted';
import { NextPageProps } from '@/@types/global';
import styles from './AboutWrapper.client.module.css';

interface Props {
  searchParams: NextPageProps['searchParams'];
}

function AboutWrapper(props: PropsWithChildren<Props>) {
  const { children, searchParams } = props;
  const [maintainer, setMaintainer] = useState('');

  useMounted(() => {
    const Aborter = new AbortController();
    fetch('https://api.quran.gading.dev/', { signal: Aborter.signal })
      .then(raw => raw.json())
      .then(data => setMaintainer(data.maintaner));
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
          <Link href="/" className="text-fuchsia-400 text-center mt-5 hover:underline underline-offset-4">
            Back to Homepage
          </Link>
        </div>

        {children}
      </main>
    </div>
  );
}

export default AboutWrapper;

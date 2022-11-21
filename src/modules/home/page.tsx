import { useEffect } from 'react';
import Link from 'next/link';

import Image from '@/modules/shared/components/base/Image';
import SVG from '@/modules/shared/components/base/Image/SVG';
import SVGRemote from '@/modules/shared/components/base/Image/SVG/Remote';
import { withMainLayoutPage } from '@/modules/shared/components/layouts/page/Main';

import IconVercel from '#/vercel.svg';
import styles from './page.module.css';

function Home() {
  useEffect(() => {
    const Aborter = new AbortController();
    fetch('/api/voucher', { signal: Aborter.signal })
      .then(response => response.json())
      // eslint-disable-next-line no-console
      .then(console.log);
    return () => {
      Aborter.abort();
    };
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Image
          effect="blur"
          src="https://gading.dev/media/banners/1.jpg"
          width={500}
          alt="Vercel Logo"
          className="flex justify-center items-center rounded-md sm:min-h-[300px] h-full"
          wrapperClassName="mt-10 max-w-full -mb-10"
        />

        <p className={styles.description}>
          Visit the demo API{' '}
          <Link href="/api/voucher">
            <code className={styles.code}>/api/voucher</code>
          </Link>
        </p>

        <Link className="text-fuchsia-300 text-center mt-5 hover:underline underline-offset-4" href="/about?text=Hello%20World">
          About Page
        </Link>

        <p className="text-sm text-slate-400 mt-5 px-5 text-center mb-16">
          See browser console if you want to see the data returned from the API.
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <Image src="https://gading.dev/assets/icons/app/logo.png" size={32} alt="Vercel Logo" />
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <SVG fill="currentColor" src={IconVercel} width={72} height={16} />
          </span>
        </a>
        <SVGRemote src="https://gading.dev/assets/icons/app/logo-secondary.svg" size={32} />
      </footer>
    </div>
  );
}

export default withMainLayoutPage(Home, {
  title: 'Homepage'
});

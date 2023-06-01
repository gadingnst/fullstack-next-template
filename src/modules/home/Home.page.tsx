import Link from 'next/link';

import Image from '@/packages/components/base/Image';
import SVGRemote from '@/packages/components/base/Image/SVG/Remote';

// TODO: solve svgr issue in app directory
// import SVG from '@/packages/components/base/Image/SVG';
// import IconVercel from '#/vercel.svg';

import styles from './home.page.module.css';
import { withMainLayoutPage } from '@/packages/components/layouts/page/Main';
import VouchersResponse from '@/modules/components/VoucherResponse';

function Home() {
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
          <Link href="/api/vouchers">
            <code className={styles.code}>/api/vouchers</code>
          </Link>
        </p>

        <Link className="text-fuchsia-400 text-center mt-5 mb-5 hover:underline underline-offset-4" href="/about?text=Hello%20World">
          About Page
        </Link>

        {/* Example calling Server Component inside Server Component */}
        <VouchersResponse />

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
            {/* <SVG fill="currentColor" src={IconVercel} width={72} height={16} /> */}
            <SVGRemote src="/vercel.svg" width={72} height={16} />
          </span>
        </a>
        <SVGRemote src="https://gading.dev/assets/icons/app/logo-secondary.svg" size={32} />
      </footer>
    </div>
  );
}

export default withMainLayoutPage(Home, {});

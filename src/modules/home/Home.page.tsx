import Link from 'next/link';

import Image from '@/packages/components/base/Images/Image';

import styles from './Home.page.module.css';
import VouchersResponse from '@/modules/voucher/components/VoucherResponse';
import Footer from '@/modules/home/components/Footer';
import ButtonLink from '@/packages/components/base/Navigations/ButtonLink';

function HomePage() {
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
          className="flex justify-center items-center min-h-[150px] sm:min-h-[300px] rounded h-full object-fit"
          wrapperClassName="mt-10 max-w-full -mb-10 rounded"
        />

        <p className={styles.description}>
          Visit the demo API{' '}
          <Link href="/api/vouchers">
            <code className={styles.code}>/api/vouchers</code>
          </Link>
        </p>

        <ButtonLink className="bg-fuchsia-400 text-center mt-5 mb-5 hover:underline underline-offset-4" href="/about?text=Hello%20World">
          About Page
        </ButtonLink>

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

      <Footer />
    </div>
  );
}

export default HomePage;

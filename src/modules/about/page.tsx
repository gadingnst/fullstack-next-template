import Link from 'next/link';

import Image from '@/packages/components/base/Image';
import { withMobileLayoutPage } from '@/packages/components/layouts/page/Mobile';

import styles from './page.module.css';
import { type NextPageProps } from '@/types/global';
import asyncComponent from '@/packages/components/layouts/asyncComponent';

const About = asyncComponent(async(props: NextPageProps) => {
  const { searchParams } = props;
  const rawResult = await fetch('https://api.quran.gading.dev/', { cache: 'force-cache' });
  const result = await rawResult.json();

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <main className="mt-10 md:-mt-10">
        <h1 className="text-center text-xl mb-10">
          {result.maintaner}
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
          <Link href="/" className="text-fuchsia-300 text-center mt-5 hover:underline underline-offset-4">
            Back to Homepage
          </Link>
        </div>
      </main>
    </div>
  );
});

export default withMobileLayoutPage(About, {
  classNameMobile: 'shadow-violet-500 px-3'
});

import type { GetServerSideProps, GetServerSidePropsResult } from 'next';
import Link from 'next/link';
import Image from '@/modules/shared/components/base/Image';
import styles from './page.module.css';
import { withMobileLayoutPage } from '../shared/components/layouts/page/Mobile';

export interface Props {
  maintainer: string;
  query?: any;
}

export const getServerSideProps: GetServerSideProps<Props> = async(ctx): Promise<GetServerSidePropsResult<Props>> => {
  const { query } = ctx;
  const rawResult = await fetch('https://api.quran.gading.dev/', { cache: 'force-cache' });
  const result = await rawResult.json();
  return {
    props: {
      maintainer: result.maintaner as string,
      query
    }
  };
};

function About(props: Props) {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <main className="mt-10 md:-mt-10">
        <h1 className="text-center text-xl mb-10">
          {props.maintainer}
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
            {JSON.stringify(props.query)}
          </p>
          <Link href="/" className="text-fuchsia-300 text-center mt-5 hover:underline underline-offset-4">
            Back to Homepage
          </Link>
        </div>
      </main>
    </div>
  );
}

export default withMobileLayoutPage(About, props => ({
  title: `About ${props.maintainer}`,
  classNameMobile: 'dark:shadow-blue-500 px-2'
}));

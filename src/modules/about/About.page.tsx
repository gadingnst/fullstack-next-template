import { type NextPageProps } from '@/types/global';
import { Suspense } from 'react';

import AboutClient from '@/modules/about/AboutClient';
import VouchersResponse from '@/modules/components/VoucherResponse';

import { withMobileLayoutPage } from '@/packages/components/layouts/page/Mobile';

function About(props: NextPageProps) {
  const { searchParams } = props;
  return (
    <AboutClient searchParams={searchParams}>
      {/* Exampe calling Server Component inside Client Component with Suspense */}
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <VouchersResponse />
      </Suspense>
    </AboutClient>
  );
}

export default withMobileLayoutPage(About, {
  classNameMobile: 'shadow-violet-500 px-3'
});

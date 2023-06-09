import { type NextPageProps } from '@/types/global';
import { Suspense } from 'react';

import VouchersResponse from '@/modules/components/VoucherResponse';
import AboutWrapper from '@/modules/about/AboutWrapper.client';

import { withMobileLayoutPage } from '@/packages/components/layouts/Page/Mobile';

function About(props: NextPageProps) {
  const { searchParams } = props;
  return (
    <AboutWrapper searchParams={searchParams}>
      {/* Exampe calling Server Component inside Client Component with Suspense */}
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <VouchersResponse />
      </Suspense>
    </AboutWrapper>
  );
}

export default withMobileLayoutPage(About, {
  classNameMobile: 'shadow-violet-500 px-3'
});

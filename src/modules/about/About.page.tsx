import { type NextPageProps } from '@/types/global';
import { Suspense } from 'react';

import VouchersResponse from '@/modules/components/VoucherResponse';
import AboutWrapper from '@/modules/about/AboutWrapper.client';

function AboutPage(props: NextPageProps) {
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

export default AboutPage;

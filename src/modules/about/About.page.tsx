import { Suspense } from 'react';

import { type NextPageProps } from '@/@types/global';
import AboutWrapper from '@/modules/About/components/AboutWrapper.client';
import VouchersResponse from '@/modules/Voucher/components/VoucherResponse';

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

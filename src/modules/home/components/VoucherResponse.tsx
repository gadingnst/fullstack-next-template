'use client';

import { type VoucherFields } from '@/server/models/Voucher';
import { useEffect, useState } from 'react';

function VouchersResponse() {
  const [vouchers, setVouchers] = useState<VoucherFields[]>([]);
  useEffect(() => {
    const Aborter = new AbortController();
    fetch('/api/vouchers', { signal: Aborter.signal })
      .then(response => response.json())
      // eslint-disable-next-line no-console
      .then(setVouchers);
    return () => {
      Aborter.abort();
    };
  }, []);
  return (
    <code className="max-w-[380px] mb-16">
      {JSON.stringify(vouchers, null, 2)}
    </code>
  );
}

export default VouchersResponse;

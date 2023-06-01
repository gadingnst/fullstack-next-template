import asyncComponent from '@/packages/components/layouts/asyncComponent';
import VoucherModel from '@/server/models/Voucher';

const VouchersResponse = asyncComponent(async() => {
  const vouchers = await VoucherModel.all();
  return (
    <code className="max-w-[380px] mb-16 text-center">
      {JSON.stringify(vouchers, null, 2)}
    </code>
  );
});

export default VouchersResponse;

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import VoucherController from '@/server/controllers/Voucher';
import withVerifyAppKey from '@/server/middlewares/verify-app-key';
import withMethod from '@/server/utils/withMethod';

export default withMethod({
  GET: VoucherController.index,
  POST: withVerifyAppKey(VoucherController.insert)
});

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import VoucherController from 'app/controllers/Voucher';
import verifyAppKey from 'app/middlewares/verifyAppKey';
import withMethod from 'app/utils/withMethod';
import withMiddleware from 'app/utils/withMiddleware';

const withVerifyAppKey = withMiddleware(verifyAppKey);

export default withMethod({
  GET: VoucherController.index,
  POST: withVerifyAppKey(VoucherController.insert)
});

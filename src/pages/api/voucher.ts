// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import VoucherController from 'app/controllers/Voucher';
import withMethod from 'app/utils/withMethod';

export default withMethod({
  GET: VoucherController.index,
  POST: VoucherController.insert
});

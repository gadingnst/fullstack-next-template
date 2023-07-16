import VoucherController from '@/server/services/Voucher/Voucher.controller';
import withVerifyAppKey from '@/server/packages/middlewares/withVerifyAppKey';

/**
 * @route `/api/vouchers`
 * @dir `app/api/vouchers/route.ts`
 */

export const GET = VoucherController.index;
export const POST = withVerifyAppKey(VoucherController.insert);

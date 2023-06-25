import VoucherHandler from '@/server/services/Voucher/Voucher.controller';
import withVerifyAppKey from '@/server/packages/middlewares/withVerifyAppKey';

/**
 * @route `/api/vouchers`
 * @dir `app/api/vouchers/route.ts`
 */

export const GET = VoucherHandler.index;
export const POST = withVerifyAppKey(VoucherHandler.insert);

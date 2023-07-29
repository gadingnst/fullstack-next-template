/**
 * @route `/api/vouchers`
 * @dir `app/api/vouchers/route.ts`
 */

import VoucherController from '@/modules/Voucher/services/Voucher.controller';
import withVerifyAppKey from '@/packages/server/middlewares/withVerifyAppKey';

export const GET = VoucherController.index;
export const POST = withVerifyAppKey(VoucherController.insert);

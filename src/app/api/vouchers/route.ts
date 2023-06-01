import VoucherHandler from '@/server/controllers/Voucher';
import withVerifyAppKey from '@/server/middlewares/verify-app-key';

export const GET = VoucherHandler.index;
export const POST = withVerifyAppKey(VoucherHandler.insert);

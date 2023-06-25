import Model from '@/server/packages/base/Model';

export interface VoucherFields<T = string|number> {
  readonly _id?: T;
  name: string;
  expires: string;
}

class VoucherModelDTO extends Model<VoucherFields> {
  protected collectionName = 'vouchers';
}

const VoucherModel = new VoucherModelDTO();

export default VoucherModel;

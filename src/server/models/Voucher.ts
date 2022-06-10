import Model from './Model';

export interface VoucherFields<T = string|number> {
  readonly _id?: T;
  name: string;
  expires: string;
}

class VoucherModel extends Model<VoucherFields> {
  protected collectionName = 'vouchers';
}

export default new VoucherModel();

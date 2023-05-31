import Model from './Model';

export interface VoucherFields<T = string|number> {
  readonly _id?: T;
  name: string;
  expires: string;
}

class VoucherModelScheme extends Model<VoucherFields> {
  protected collectionName = 'vouchers';
}

const VoucherModel = new VoucherModelScheme();

export default VoucherModel;

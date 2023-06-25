import Controller from '@/server/packages/base/Controller';
import VoucherModel from '@/server/services/Voucher/Voucher.model';

class VoucherController extends Controller {
  /**
   * Use arrow function to create Controller method.
   * @see https://www.geeksforgeeks.org/arrow-functions-in-javascript/
   * @param req Request
   */
  public index = async() => {
    try {
      const payload = await VoucherModel.all();
      return this.sendJSON({
        code: 200,
        message: 'Success get all Vouchers.',
        payload
      });
    } catch (err) {
      return this.handleError(err);
    }
  };

  public insert = async(req: Request) => {
    const { name, expires } = await req.json();
    try {
      const errors: string[] = [];
      if (!name) errors.push('field "name" is required.');
      if (!expires) errors.push('field "expires" is required.');
      if (errors.length) return this.setError(400, errors, 'Validation error.');
      const payload = await VoucherModel.insert({ name, expires });
      return this.sendJSON({
        code: 201,
        message: 'Success add Voucher.',
        payload
      });
    } catch (err) {
      return this.handleError(err);
    }
  };
}

const VoucherHandler = new VoucherController();

export default VoucherHandler;

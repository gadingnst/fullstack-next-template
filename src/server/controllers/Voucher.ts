import type { NextApiRequest, NextApiResponse } from 'next';
import type { HttpResponse } from '@/server/types/Http';
import Controller from './Controller';
import Voucher from '@/server/models/Voucher';

class VoucherController extends Controller {
  /**
   * Use arrow function to create Controller method.
   * @see https://www.geeksforgeeks.org/arrow-functions-in-javascript/
   * @param req NextApiRequest
   * @param res NextApiResponse
   */
  public index = async(req: NextApiRequest, res: NextApiResponse<HttpResponse>) => {
    try {
      const payload = await Voucher.all();
      this.sendJSON(res, {
        code: 200,
        message: 'Success get all Vouchers.',
        payload
      });
    } catch (err) {
      this.handleError(res, err);
    }
  };

  public insert = async(req: NextApiRequest, res: NextApiResponse<HttpResponse>) => {
    const { name, expires } = req.body;
    try {
      const errors: string[] = [];
      if (!name) errors.push('field "name" is required.');
      if (!expires) errors.push('field "expires" is required.');
      if (errors.length) return this.setError(400, errors, 'Validation error.');
      const payload = await Voucher.insert({ name, expires });
      this.sendJSON(res, {
        code: 201,
        message: 'Success add Voucher.',
        payload
      });
    } catch (err) {
      this.handleError(res, err);
    }
  };
}

export default new VoucherController();

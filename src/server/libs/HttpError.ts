/* eslint-disable no-console */
import type { NextApiResponse } from 'next';

class HttpError<T = any, E = string[]> extends Error {
  constructor(code: number, errors: E, message: string, payload?: T) {
    const responseError = { code, errors, message, payload };
    super(JSON.stringify(responseError));
    Object.setPrototypeOf(this, this.constructor.prototype);
  }

  public static handle(res: NextApiResponse, err: Error|unknown) {
    if (err instanceof this) {
      const error = JSON.parse(err.message);
      console.error(error);
      return res.status(error.code).send(error);
    }
    console.error(err);
    return res.status(500).send({
      code: 500,
      message: 'Internal server error.',
      errors: ['An unknown error in server has occured.']
    });
  }
}

export default HttpError;

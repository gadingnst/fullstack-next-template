/* eslint-disable no-console */
import type { NextApiResponse } from 'next';

class HttpError<T = any> extends Error {
  constructor(code: number, message: string, payload?: T) {
    const responseError = { code, message, error: true, payload };
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
      error: true
    });
  }
}

export default HttpError;

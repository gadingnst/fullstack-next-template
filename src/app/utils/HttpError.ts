/* eslint-disable no-console */
import type { NextApiRequest, NextApiResponse } from 'next';

class HttpError extends Error {
  constructor(code: number, message: string) {
    super(JSON.stringify({ code, message, error: true }));
    Object.setPrototypeOf(this, this.constructor.prototype);
  }

  public static handle(req: NextApiRequest, res: NextApiResponse, err: Error|unknown) {
    if (err instanceof this) {
      const error = JSON.parse(err.message);
      console.error(error);
      return res.status(error.code).send(error);
    }
    console.error(err);
    return res.status(500).send({
      code: 500,
      message: `Internal server error!`,
      error: true
    });
  }
}

export default HttpError;

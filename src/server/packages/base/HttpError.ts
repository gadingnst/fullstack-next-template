/* eslint-disable no-console */
import { NextResponse } from 'next/server';

class HttpError<T = any, E = string[]> extends Error {
  constructor(code: number, errors: E, message: string, payload?: T) {
    const responseError = { code, errors, message, payload };
    super(JSON.stringify(responseError));
    Object.setPrototypeOf(this, this.constructor.prototype);
  }

  public static handle(err: Error|unknown) {
    if (err instanceof this) {
      const error = JSON.parse(err.message);
      console.error(error);
      return NextResponse.json(error, {
        status: error.code
      });
    }
    const statusCode = 500;
    return NextResponse.json({
      code: statusCode,
      message: 'Internal server error.',
      errors: ['An unknown error in server has occured.']
    }, {
      status: statusCode
    });
  }
}

export default HttpError;

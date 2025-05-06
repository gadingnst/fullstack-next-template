/* eslint-disable no-console */
import { NextResponse } from 'next/server';

class HttpError<T = unknown, E = string[]> extends Error {
  constructor(code: number, errors: E, message: string, payload?: T) {
    const responseError = { code, errors, message, payload };
    super(JSON.stringify(responseError));
    Object.setPrototypeOf(this, this.constructor.prototype);
  }

  public static logError(err: Error) {
    console.error(err);
  }

  public static handle(err: Error) {
    HttpError.logError(err);

    if (err instanceof this) {
      const error = JSON.parse(err.message);
      return NextResponse.json(error, {
        status: error.code
      });
    }

    if (err?.message?.includes('Unexpected end of JSON input')) {
      const statusCode = 400;
      return NextResponse.json({
        code: statusCode,
        message: 'Bad Request.',
        errors: ['Request body is required']
      }, {
        status: statusCode
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

import { NextResponse } from 'next/server';

import { type HttpResponse } from '@/@types/global';
import HttpError from '@/packages/server/base/HttpError';

abstract class Controller<Body = unknown> extends NextResponse<Body> {
  protected sendJSON<T>(data: HttpResponse<T>) {
    return NextResponse.json(data, {
      status: data.code
    });
  }

  protected setError<E = string[]>(code: number, errors: E, message?: string) {
    throw new HttpError(code, errors, message ?? 'HTTP errors has occured.');
  }

  protected handleError(error: Error|unknown) {
    return HttpError.handle(error as Error);
  }
}

export default Controller;

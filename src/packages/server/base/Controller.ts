import { NextResponse } from 'next/server';

import { type HttpResponse } from '@/@types/global';
import HttpError from '@/packages/server/base/HttpError';

abstract class Controller {
  protected response = NextResponse;

  protected sendJSON<T>(data: HttpResponse<T>) {
    return NextResponse.json(data, {
      status: data.code
    });
  }

  protected sendResponse(stream: BodyInit, options: ResponseInit) {
    return new NextResponse(stream, options);
  }

  protected setError<E = string[]>(code: number, errors: E, message?: string) {
    throw new HttpError(code, errors, message ?? 'HTTP errors has occured.');
  }

  protected handleError(error: Error|unknown) {
    return HttpError.handle(error as Error);
  }

  protected logError(error: Error|unknown) {
    return HttpError.logError(error as Error);
  }
}

export default Controller;
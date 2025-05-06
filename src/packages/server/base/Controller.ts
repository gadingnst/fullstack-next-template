import { NextResponse } from 'next/server';

import type { HttpResponseJson } from '@/@types/global';
import HttpError from '@/packages/server/base/HttpError';

abstract class Controller {
  protected static response = NextResponse;

  sendJSON<T>(data: HttpResponseJson<T>) {
    return Controller.sendJSON(data);
  }

  sendResponse(stream: BodyInit, options: ResponseInit) {
    return Controller.sendResponse(stream, options);
  }

  setError<E = string[]>(code: number, errors: E, message?: string) {
    return Controller.setError(code, errors, message);
  }

  handleError(error: Error | unknown) {
    return Controller.handleError(error);
  }

  logError(error: Error | unknown) {
    return Controller.logError(error);
  }

  /** static methods */
  static sendJSON<T>(data: HttpResponseJson<T>) {
    return NextResponse.json(data, {
      status: data.code
    });
  }

  static sendResponse(stream: BodyInit, options: ResponseInit) {
    return new NextResponse(stream, options);
  }

  static setError<E = string[]>(code: number, errors: E, message?: string) {
    throw new HttpError(code, errors, message ?? 'HTTP errors has occured.');
  }

  static handleError(error: Error | unknown) {
    return HttpError.handle(error as Error);
  }

  static logError(error: Error | unknown) {
    return HttpError.logError(error as Error);
  }
}

export default Controller;

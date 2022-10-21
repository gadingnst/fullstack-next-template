import type { NextApiResponse } from 'next';
import type { HttpResponse } from '@/server/types/Http';
import HttpError from '@/server/libs/HttpError';

abstract class Controller {
  protected sendJSON<T>(res: NextApiResponse, data: HttpResponse<T>) {
    return res.status(data.code).send(data);
  }

  protected setError<E = string[]>(code: number, errors: E, message?: string) {
    throw new HttpError(code, errors, message ?? 'HTTP errors has occured.');
  }

  protected handleError(res: NextApiResponse, error: Error|unknown) {
    return HttpError.handle(res, error);
  }
}

export default Controller;

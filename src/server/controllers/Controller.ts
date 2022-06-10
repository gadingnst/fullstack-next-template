
import type { NextApiResponse } from 'next';
import HttpError from '@/server/lib/HttpError';

export interface HttpResponse<T> {
  code: number;
  message: string;
  error?: boolean;
  payload?: T;
}

abstract class Controller {
  protected sendJSON<T>(res: NextApiResponse, data: HttpResponse<T>) {
    return res.status(data.code).send({ error: false, ...data });
  }

  protected setError(code: number, msg: string) {
    throw new HttpError(code, msg);
  }

  protected handleError(res: NextApiResponse, error: Error|unknown) {
    return HttpError.handle(res, error);
  }
}

export default Controller;

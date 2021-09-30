import type { NextApiRequest, NextApiResponse } from 'next';
import HttpError from 'app/utils/HttpError';

export interface HttpResponse<T> {
  code: number,
  message: string,
  error?: boolean,
  payload?: T
}

export default class Controller {
  protected send<T>(res: NextApiResponse, data: HttpResponse<T>) {
    res.status(data.code).send({ error: false, ...data });
  }

  protected setError(code: number, msg: string): void {
    throw new HttpError(code, msg);
  }

  protected handleError(req: NextApiRequest, res: NextApiResponse, error: Error|unknown) {
    return HttpError.handle(req, res, error);
  }
}

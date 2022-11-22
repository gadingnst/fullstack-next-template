import type { NextApiRequest, NextApiResponse } from 'next';
import type { HttpResponse } from '@/server/types/Http';
import type { MethodHandler } from './withMethod';

export type NextFunction = () => void;
export type MiddlewareHandler<T = HttpResponse> = (req: NextApiRequest, res: NextApiResponse<T>, next: NextFunction) => void;

const withMiddleware = <T = HttpResponse>(handler: MiddlewareHandler<T>) =>
  (next: MethodHandler) =>
    (req: NextApiRequest, res: NextApiResponse<T>) => {
      const nextHandler = () => next(req, res);
      return handler(req, res, nextHandler);
    };

export default withMiddleware;

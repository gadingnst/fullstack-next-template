import type { NextApiRequest, NextApiResponse } from 'next';
import type { MethodHandler } from './with-method';

export type NextFunction = () => void;
export type MiddlewareHandler = (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => void;

const withMiddleware = (handler: MiddlewareHandler) =>
  (next: MethodHandler) =>
    (req: NextApiRequest, res: NextApiResponse) => {
      const nextHandler = () => next(req, res);
      return handler(req, res, nextHandler);
    };

export default withMiddleware;

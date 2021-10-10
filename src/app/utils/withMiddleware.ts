import type { NextApiRequest, NextApiResponse } from 'next';
import type { MethodHandler } from './withMethod';

export type MiddlewareHandler = (req: NextApiRequest, res: NextApiResponse, next: () => void) => void

const withMiddleware = (handler: MiddlewareHandler) =>
  (next: MethodHandler) =>
    (req: NextApiRequest, res: NextApiResponse) => {
      const nextHandler = () => next(req, res);
      return handler(req, res, nextHandler);
    };

export default withMiddleware;

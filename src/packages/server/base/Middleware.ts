export type NextFunction = () => void;
export type Handler = (req: Request) => void;
export type MiddlewareHandler = (req: Request, next: NextFunction) => void;

export const createMiddleware = (handler: MiddlewareHandler) => (next: Handler) => (req: Request) => {
  const nextHandler = () => next(req);
  return handler(req, nextHandler);
};

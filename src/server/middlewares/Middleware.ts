export type MethodHandler = (req: Request) => void;
export type NextFunction = () => void;
export type MiddlewareHandler = (req: Request, next: NextFunction) => void;

const withMiddleware = (handler: MiddlewareHandler) => (next: MethodHandler) => (req: Request) => {
  const nextHandler = () => next(req);
  return handler(req, nextHandler);
};

export default withMiddleware;

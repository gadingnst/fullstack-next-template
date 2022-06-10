import type { NextApiRequest, NextApiResponse } from 'next';

export type HttpMethods = 'GET'|'POST'|'PUT'|'DELETE'|'PATCH';
export type MethodHandler = (req: NextApiRequest, res: NextApiResponse) => void;
export type MethodModel = {
  [key in HttpMethods]?: MethodHandler
};

const withMethod = (handlers: MethodModel) => (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  if (method in handlers) {
    const handler = handlers[method];
    return handler(req, res);
  }
  res.setHeader('Allow', Object.keys(handlers));
  return res.status(405).send({
    code: 405,
    message: `Method "${method}" not allowed.`,
    error: true
  });
};

export default withMethod;

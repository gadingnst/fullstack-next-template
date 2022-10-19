import type { NextApiRequest, NextApiResponse } from 'next';
import type { HttpResponse } from '@/server/types/Http';

export type HttpMethods = 'GET'|'POST'|'PUT'|'DELETE'|'PATCH';
export type MethodHandler = (req: NextApiRequest, res: NextApiResponse) => void;
export type MethodModel = {
  [key in HttpMethods]?: MethodHandler
};

const withMethod = (handlers: MethodModel) => (req: NextApiRequest, res: NextApiResponse<HttpResponse>) => {
  const { method } = req;
  if (method in handlers) {
    const handler = handlers[method];
    return handler(req, res);
  }
  res.setHeader('Allow', Object.keys(handlers));
  return res.status(405).send({
    code: 405,
    message: 'Method not allowed',
    errors: [`Method "${method}" not allowed.`]
  });
};

export default withMethod;

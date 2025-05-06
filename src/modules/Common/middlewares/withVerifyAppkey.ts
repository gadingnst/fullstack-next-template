import { createMiddleware } from '@/packages/server/base/Middleware';
import { SECRET_APP_KEY } from '@/configs/envs';
import Controller from '@/packages/server/base/Controller';

/**
 * example to screate custom middleware with `createMiddleware HoF`
 */
const withVerifyAppKey = createMiddleware((req, next) => {
  const query = new URL(req.url).searchParams;
  const key = query.get('key');
  if (key === SECRET_APP_KEY) return next();
  return Controller.sendJSON({
    code: 400,
    message: 'Bad request.',
    errors: ['Secret key invalid.']
  });
});

export default withVerifyAppKey;

import withMiddleware from '@/server/utils/with-middleware';
import { SECRET_APP_KEY } from '@/server/utils/config';

/**
 * create custom middleware with `withMiddleware HoF`
 */
const withVerifyAppKey = withMiddleware((req, res, next) => {
  const { key } = req.query;
  if (key === SECRET_APP_KEY) return next();
  return res.status(400).send({
    code: 400,
    message: 'Secret key invalid.',
    error: true
  });
});

export default withVerifyAppKey;

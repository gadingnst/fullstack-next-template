import withMiddleware from '@/server/utils/withMiddleware';
import { SECRET_APP_KEY } from '@/server/configs/env';

/**
 * create custom middleware with `withMiddleware HoF`
 */
const withVerifyAppKey = withMiddleware((req, res, next) => {
  const { key } = req.query;
  if (key === SECRET_APP_KEY) return next();
  return res.status(400).send({
    code: 400,
    message: 'Bad request.',
    errors: ['Secret key invalid.']
  });
});

export default withVerifyAppKey;

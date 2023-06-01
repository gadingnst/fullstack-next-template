import { NextResponse } from 'next/server';
import withMiddleware from '@/server/middlewares/Middleware';

import { SECRET_APP_KEY } from '@/server/configs/env';

/**
 * create custom middleware with `withMiddleware HoF`
 */
const withVerifyAppKey = withMiddleware((req, next) => {
  const query = new URL(req.url).searchParams;
  const key = query.get('key');
  if (key === SECRET_APP_KEY) return next();
  return NextResponse.json({
    code: 400,
    message: 'Bad request.',
    errors: ['Secret key invalid.']
  }, { status: 400 });
});

export default withVerifyAppKey;

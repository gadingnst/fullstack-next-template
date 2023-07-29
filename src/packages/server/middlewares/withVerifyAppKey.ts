import { NextResponse } from 'next/server';

import { SECRET_APP_KEY } from '@/configs/env';
import { createMiddleware } from '@/packages/server/base/Middleware';

/**
 * create custom middleware with `createMiddleware HoF`
 */
const withVerifyAppKey = createMiddleware((req, next) => {
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

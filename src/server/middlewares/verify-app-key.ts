import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextFunction } from '@/server/utils/with-middleware';
import { SECRET_APP_KEY } from '@/server/utils/config';

const verifyAppKey = (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {
  const { key } = req.query;
  if (key === SECRET_APP_KEY) return next();
  return res.status(400).send({
    code: 400,
    message: 'Secret key invalid.',
    error: true
  });
};

export default verifyAppKey;

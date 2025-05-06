/**
 * @route `/api/quotes/random`
 * @dir `app/api/quotes/random/route.ts`
 */

import withVerifyAppKey from '@/modules/Common/middlewares/withVerifyAppkey';
import QuoteController from '@/modules/Quotes/services/Quote.controller';

export const GET = withVerifyAppKey(QuoteController.random);

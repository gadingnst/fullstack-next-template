/**
 * @route `/api/jokes`
 * @dir `app/api/jokes/route.ts`
 */

import JokeController from '@/modules/Joke/services/Joke.controller';
import withVerifyAppKey from '@/packages/server/middlewares/withVerifyAppKey';

export const GET = JokeController.index;
export const POST = withVerifyAppKey(JokeController.insert);

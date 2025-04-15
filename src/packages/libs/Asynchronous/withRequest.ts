import withPromise, { type IPromiseResult, isPromiseError } from './withPromise';
import type { BaseHttpError } from '../BaseHttp/interfaces';

type IRequestResult<T> = IPromiseResult<T, BaseHttpError>;

export function isRequestError(error: unknown): error is BaseHttpError {
  return isPromiseError<BaseHttpError>(error);
}

export function is404(error: BaseHttpError|null) {
  const { response } = error || {};
  return response?.status === 404;
}

async function withRequest<T>(func: () => Promise<T>): Promise<IRequestResult<T>> {
  const [err, result] = await withPromise(func);
  if (isRequestError(err)) {
    const error = err ?? { 
      message: 'Internal Server Error',
      response: new Response(null, { status: 500, statusText: 'Internal Server Error' })
    } as BaseHttpError;
    return [error, null as Awaited<T>] as const;
  }
  return [null, result] as const;
}

withRequest.isError = isRequestError;
withRequest.is404 = is404;

export default withRequest;

export type IPromiseResult<T, E = Error> = readonly [E|null, T];

export function isPromiseError<E = Error>(error: unknown): error is E {
  return error !== null;
}

async function withPromise<T, E = Error>(func: () => Promise<T>): Promise<IPromiseResult<T, E>> {
  try {
    const response = await func();
    return [null, response] as const;
  } catch (err: unknown) {
    return [err as E, null as Awaited<T>] as const;
  }
}

withPromise.isError = isPromiseError;

export default withPromise;

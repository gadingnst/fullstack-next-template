import {
  type GetServerSidePropsContext,
  type GetServerSidePropsResult
} from 'next';

type SSRContext = GetServerSidePropsContext;
type SSRResult<T> = GetServerSidePropsResult<T>|Promise<GetServerSidePropsResult<T>>;
export type SSRNextFunction<T> = (ctx: SSRContext) => SSRResult<T>;

const createSSRProps = <T>(next: SSRNextFunction<T>) =>
  (ctx: SSRContext): SSRResult<T> => next(ctx);

export default createSSRProps;

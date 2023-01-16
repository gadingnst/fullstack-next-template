import { type ParsedUrlQuery } from 'querystring';
import {
  GetStaticPathsContext,
  GetStaticPathsResult,
  type GetStaticPropsContext,
  type GetStaticPropsResult
} from 'next';

/** getStaticPaths */
type SSGPathsContext = GetStaticPathsContext;
type SSGPathsResult<T extends ParsedUrlQuery> = GetStaticPathsResult<T>|Promise<GetStaticPathsResult<T>>;
export type SSGParsedQuery = ParsedUrlQuery;
export type SSGPathsNextFunction<T extends ParsedUrlQuery = ParsedUrlQuery> = (ctx: SSGPathsContext) => SSGPathsResult<T>;

const createSSGPaths = <T extends ParsedUrlQuery = ParsedUrlQuery>(next: SSGPathsNextFunction<T>) =>
  (ctx: SSGPathsContext): SSGPathsResult<T> => next(ctx);

/** getStaticProps */
type SSGPropsContext = GetStaticPropsContext;
type SSGPropsResult<T> = GetStaticPropsResult<T>|Promise<GetStaticPropsResult<T>>;
export type SSGPropsNextFunction<T> = (ctx: SSGPropsContext) => SSGPropsResult<T>;

const createSSGProps = <T>(next: SSGPropsNextFunction<T>) =>
  (ctx: SSGPropsContext): SSGPropsResult<T> => next(ctx);

export { createSSGPaths, createSSGProps };

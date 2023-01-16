import {
  type SSGPathsNextFunction,
  type SSGPropsNextFunction,
  type SSGParsedQuery,
  createSSGPaths,
  createSSGProps
} from './createSSG';

/**
 * custom middleware for getStaticPaths, so yoi will be no longer to import `GetStaticPathsContext` and `GetStaticPathsResult` anymore.
 * @usage
 * in NextJS page file:
 *
 * export const getStaticPaths = withSSGPaths<YOUR_PROP_TYPE>((ctx) => {
 *
 *   // normal getStaticPaths code
 *
 * })
 */
const withSSGPaths = <T extends SSGParsedQuery = SSGParsedQuery>(next: SSGPathsNextFunction<T>) => createSSGPaths<T>(next);

/**
 * custom middleware for getStaticProps, so yoi will be no longer to import `GetStaticPropsContext` and `GetStaticPropsResult` anymore.
 * @usage
 * in NextJS page file:
 *
 * export const getStaticProps = withSSGProps<YOUR_PROP_TYPE>((ctx) => {
 *
 *   // normal getStaticProps code
 *
 * })
 */
const withSSGProps = <T>(next: SSGPropsNextFunction<T>) => createSSGProps<T>(next);

export { withSSGPaths, withSSGProps };

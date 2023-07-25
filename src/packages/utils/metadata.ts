import type { Metadata, ResolvingMetadata } from 'next';

import type { NextPageProps } from '@/@types/global';

type ICallbackGenerateMetadata<T> = (props: NextPageProps<T>, parent: ResolvingMetadata) => Promise<Metadata>;

/**
 * @usage
 * export const metadata = withMetadata({
 *  title: 'My Title'
 * });
 */
export function withMetadata(metadata: Metadata): Metadata {
  return metadata;
}

/**
 * @usage
 * type Props = {
 *  params: { productId: string; }
 * }
 *
 * export const generateMetadata = withGenerateMetadata<Props>(async(props, parent) => {
 *   const productName = await getProductName(props.params.productId);
 *   return {
 *     title: productName
 *   };
 * })
 */
export function withGenerateMetadata<T>(cb: ICallbackGenerateMetadata<T>) {
  return (props: NextPageProps<T>, parent: ResolvingMetadata) => cb(props, parent);
}

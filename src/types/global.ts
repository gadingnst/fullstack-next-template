import { type NextPage } from 'next';

export type NextPageComponent<T> = NextPage<T>;

export interface NextPageProps<T = Record<string, string>> {
  params: T;
  searchParams: { [key: string]: string | string[] | undefined; };
}

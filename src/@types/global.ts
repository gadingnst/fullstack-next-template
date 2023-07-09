import { type NextPage } from 'next';

export type NextPageComponent<T> = NextPage<T>;

export interface NextPageProps<T = Record<string, string>> {
  params: T;
  searchParams: {
    [key: string]: string|string[]|undefined;
  };
}

export interface HttpResponse<T = any, E = string[]> {
  code: number;
  message?: string;
  payload?: T;
  errors?: E;
}

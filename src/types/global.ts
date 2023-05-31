export interface NextPageProps<T = Record<string, string>> {
  params: T;
  searchParams: { [key: string]: string | string[] | undefined; };
}

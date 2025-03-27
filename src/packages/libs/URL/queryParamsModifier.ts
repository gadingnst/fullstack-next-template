export const parseQuery = (url: string): Record<string, string> => {
  const query = url.split('?')[1];
  return query ? query.split('&').reduce((acc, item) => {
    const [key, value] = item.split('=');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (acc as any)[key] = value;
    return acc;
  }, {}) : {};
};

export const stringifyQuery = <T>(query: Record<string, string|T[]|null|undefined>): string => {
  return Object.entries(query).reduce((acc, [key, value]) => {
    const val = Array.isArray(value) ? value.join(',') : value;
    if (val) acc += `${key}=${val}&`;
    return acc;
  }, '').slice(0, -1);
};

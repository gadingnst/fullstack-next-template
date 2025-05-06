export type BaseHttpMethod = 'GET'|'POST'|'PUT'|'PATCH'|'DELETE';

export type BaseHttpResponseJson<T = undefined> = T;

export interface BaseHttpConfig extends RequestInit {
  baseURL: string;
}

export interface BaseHttpError extends Error {
  response?: Response;
}

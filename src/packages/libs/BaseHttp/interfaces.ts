export type BaseHttpMethod = 'GET'|'POST'|'PUT'|'PATCH'|'DELETE';

export type BaseHttpResponse<T = undefined> = T;

export interface BaseHttpConfig extends RequestInit {
  baseURL: string;
}

export interface BaseHttpError extends Error {
  response?: Response;
}
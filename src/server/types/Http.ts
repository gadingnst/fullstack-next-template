export interface HttpResponse<T = any, E = string[]> {
  code: number;
  message?: string;
  payload?: T;
  errors?: E;
}

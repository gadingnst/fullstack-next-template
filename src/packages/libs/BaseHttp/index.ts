import { BaseHttpResponse, BaseHttpConfig, BaseHttpError, BaseHttpMethod } from './interfaces';

export const DEFAULT_ERROR_STATUS = 'Unexpected Error.';
export const DEFAULT_HTTP_ERROR_MESSAGE = 'An unknown error occurred.';

export const defaultHttpArgs: BaseHttpConfig = {
  baseURL: ''
};

/**
 * usage:
 * const Http = new BaseHttp({ baseURL: API_BASE_URL });
 */
class BaseHttp {
  public baseURL: string;
  public requestInit: RequestInit;

  constructor(args: BaseHttpConfig) {
    const { baseURL, ...reqInit } = args;
    this.baseURL = baseURL;
    this.requestInit = reqInit;
  }

  public async request(method: BaseHttpMethod, url: string, args?: Omit<RequestInit, 'method'>) {
    const endpoint = `${this.baseURL}${encodeURI(url).trim()}`;
    try {
      const response = await fetch(endpoint, {
        ...this.requestInit,
        ...args,
        headers: {
          'Content-Type': 'application/json',
          ...this.requestInit.headers,
          ...args?.headers
        },
        method
      });
      if (!response.ok) {
        const error = new Error(`HTTP (${method}) ${response.status} error. On: "${endpoint}"`) as BaseHttpError;
        error.response = response;
        throw error;
      }
      return response;
    } catch (err) {
      throw err;
    }
  }

  public static async getErrorResponse(err: unknown) {
    const error = err as BaseHttpError;
    if (!error.response) {
      return {
        status: 0,
        statusText: DEFAULT_ERROR_STATUS,
        message: error.message
      };
    }
    const { response } = error;
    const res: BaseHttpResponse = await response.json();
    const errmsg = res?.['data'] || res?.['message'] || DEFAULT_HTTP_ERROR_MESSAGE;
    const message = typeof res === 'string' && res ? res : errmsg;
    return {
      status: response.status,
      statusText: response.statusText,
      response: error.response,
      message
    };
  }

  public async getErrorResponse(err: unknown) {
    return BaseHttp.getErrorResponse(err);
  }
}

export default BaseHttp;
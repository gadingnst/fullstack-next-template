import {
  BaseHttpResponseJson,
  BaseHttpConfig,
  BaseHttpError,
  BaseHttpMethod
} from './interfaces';

export const DEFAULT_ERROR_STATUS = 'Unexpected Error.';
export const DEFAULT_HTTP_ERROR_MESSAGE = 'An unknown error occurred.';

export const defaultHttpArgs: BaseHttpConfig = {
  baseURL: ''
};

/**
 * BaseHttp class for making HTTP requests.
 * it inherits from the native fetch API
 * --
 * usage:
 * const Http = new BaseHttp({ baseURL: API_BASE_URL });
 * try {
 *  Http.request('POST', '/api/v1/users', { body: JSON.stringify({ name: 'John Doe' }) });
 * } catch (error) {
 *  const { status, statusText, message } = await Http.getErrorResponse(error);
 *  console.error(status, statusText, message);
 * }
 */
class BaseHttp {
  public baseURL: string;
  public requestInit: RequestInit;

  constructor(args = defaultHttpArgs) {
    const { baseURL, ...reqInit } = args;
    this.baseURL = baseURL;
    this.requestInit = reqInit;
  }

  public async request(method: BaseHttpMethod, url: string, args?: Omit<RequestInit, 'method'>) {
    const endpoint = `${this.baseURL}${encodeURI(url).trim()}`;
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
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public getResponseJson<T = any>(res: Response): Promise<BaseHttpResponseJson<T>> {
    return res.json();
  }

  private static getHttpStatusMessage(status: number): string {
    switch (status) {
      case 400:
        return 'The request was invalid or cannot be processed';
      case 401:
        return 'Authentication is required to access this resource';
      case 403:
        return 'You do not have permission to access this resource';
      case 404:
        return 'The requested resource was not found';
      case 429:
        return 'Too many requests. Please try again later';
      default:
        return status >= 500
          ? 'The server encountered an error. Please try again later'
          : `Server returned an unexpected error (${status})`;
    }
  }

  private static extractErrorMessage(res: BaseHttpResponseJson, status: number): string {
    if (!res) return BaseHttp.getHttpStatusMessage(status);
    return res['error']?.['message'] ||
      res['error'] ||
      res['data'] ||
      res['message'] ||
      res['msg'] ||
      BaseHttp.getHttpStatusMessage(status);
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
    let message = DEFAULT_HTTP_ERROR_MESSAGE;

    try {
      const res: BaseHttpResponseJson = await response.json();
      message = typeof res === 'string' && res ? res : BaseHttp.extractErrorMessage(res, response.status);
    } catch {
      try {
        const textResponse = await response.text();
        message = textResponse.includes('<!DOCTYPE html>') || textResponse.includes('<html')
          ? BaseHttp.getHttpStatusMessage(response.status)
          : textResponse || BaseHttp.getHttpStatusMessage(response.status);
      } catch {
        message = BaseHttp.getHttpStatusMessage(response.status);
      }
    }

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

export const Http = new BaseHttp();

export default BaseHttp;

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */

export type HttpResponse<T = any> = {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  request?: any;
};

export interface IHttpPort {
  get<T>(url: string, params?: any): Promise<HttpResponse<T>>;
  post<T, K>(url: string, data: T, headers?: any): Promise<HttpResponse<K>>;
}

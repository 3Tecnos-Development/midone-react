/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable class-methods-use-this */
import axios, { AxiosInstance } from "axios";
import env from "react-dotenv";
import { HttpResponse, IHttpPort } from "core/ports";

export const HttpAdapter: IHttpPort = class {
  static axiosInstance(): AxiosInstance {
    const environment = env.MIDONE_ENV === "development" ? "-develop" : "";
    return axios.create({
      baseURL: `https://api-gateway${environment}.3tecnos.com.br/midone`,
      headers: {
        "x-userpoolid": env.MIDONE_USERPOOL_ID,
        "x-clientid": env.MIDONE_CLIENT_ID,
      },
    });
  }

  static get<T>(url: string, params?: any): Promise<HttpResponse<T>> {
    return new Promise((resolve, reject) => {
      this.axiosInstance()
        .get<T>(url, { params })
        .then((response) => {
          resolve({
            ...response,
          } as HttpResponse<T>);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static post<T, K>(
    url: string,
    data: T,
    headers?: any,
  ): Promise<HttpResponse<K>> {
    return new Promise((resolve, reject) => {
      this.axiosInstance()
        .post<T>(url, data, { headers })
        .then((response) => {
          resolve(({
            ...response,
          } as unknown) as HttpResponse<K>);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
};

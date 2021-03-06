/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable class-methods-use-this */
import axios, { AxiosInstance } from "axios";
import env from "react-dotenv";
import { HttpResponse, IHttpPort } from "core/ports";

export const HttpAdapter: IHttpPort = class {
  static axiosInstance(): AxiosInstance {
    const environment = env.MIDONE_ENV === "development" ? "-develop" : "";
    const enabledCors = env.MIDONE_ENABLED_CORS || false;

    const headers = {
      "x-userpoolid": env.MIDONE_USERPOOL_ID,
      "x-clientid": env.MIDONE_CLIENT_ID,
    };

    if (enabledCors) {
      Object.assign(headers, {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "cleaapplication/json;charset=utf-8",
        "Acess-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "Acess-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      });
    }

    return axios.create({
      baseURL: `https://api-gateway${environment}.3tecnos.com.br/midone`,
      headers,
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

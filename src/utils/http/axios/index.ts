import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ContentTypeEnum } from '/@/enums/httpEnum';

const ins: AxiosInstance = axios.create({
  timeout: 100000, // 响应时间
  responseType: 'json', // 响应的数据类型,有arraybuffer、blob、document、json、text、stream这6个类型
  withCredentials: true, // 是否允许带cookie这些
  headers: { 'Content-Type': ContentTypeEnum.JSON },
});

const request = (option: AxiosRequestConfig) => {
  const { url, method, params, data, headers, responseType } = option;
  return ins({
    url: url,
    method,
    params,
    data,
    responseType: responseType,
    headers,
  });
};
export default {
  get: <T = any>(option: AxiosRequestConfig) => {
    return request({ method: 'get', ...option }) as unknown as T;
  },
  post: <T = any>(option: AxiosRequestConfig) => {
    return request({ method: 'post', ...option }) as unknown as T;
  },
  delete: <T = any>(option: AxiosRequestConfig) => {
    return request({ method: 'delete', ...option }) as unknown as T;
  },
  put: <T = any>(option: AxiosRequestConfig) => {
    return request({ method: 'put', ...option }) as unknown as T;
  },
};

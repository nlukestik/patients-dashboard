import { AxiosMethodsEnum } from '@/types/axios';
import axios, { AxiosError, AxiosResponse, Method } from 'axios';

type Props = {
  url?: string;
  method?: Method;
  headers?: Record<string, string>;
  body?: unknown;
  label?: string;
  successMessage?: string;
  params?: Record<string, unknown>;
};

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: false,
});

export const api = async ({ url = '', method = AxiosMethodsEnum.GET, headers = {}, body = {}, params = {} }: Props) => {
  try {
    return await axiosInstance({
      url,
      method,
      headers,
      data: body,
      params,
    })
      .then((response?: AxiosResponse) => {
        // TODO: show success toast
        return response?.data;
      })
      .catch((error: AxiosError<{ message: string }>) => {
        const responseError = error?.response?.data?.message || '';
        const status = error?.response?.status;

        // TODO: show error toast
        console.log({ status, responseError });

        throw error;
      });
  } catch (error) {
    throw error;
  }
};

"use client";

import type {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import { useEffect } from "react";
import { StatusCode } from "status-code-enum";

import Message from "@/enums/Message";
import store from "@/store";
import { useLogout } from "@/store/hooks/auth";
import { normalize } from "@/utils/message";

export function useSetupAxios(instance: AxiosInstance) {
  const logout = useLogout();

  useEffect(
    () => {
      instance.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
          const {
            auth: { accessToken: accessToken },
          } = store.getState();

          if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
          }

          return config;
        },
        (err: AxiosError) => Promise.reject(err),
      );

      instance.interceptors.response.use(
        (value) => value,
        ({ response }: AxiosError<{ message: string }>) => {
          if (response?.status === StatusCode.ClientErrorForbidden) {
            return logout();
          }

          if (
            response?.status === StatusCode.ClientErrorUnauthorized &&
            response?.data?.message === "jwt expired"
          ) {
            return logout();
          }

          return Promise.reject(
            normalize(response?.data.message || Message.SomethingWrong),
          );
        },
      );

      return () => {
        instance.interceptors.request.clear();
        instance.interceptors.response.clear();
      };
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
}

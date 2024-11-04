"use client";

import Box from "@mui/material/Box";
import axios from "axios";
import { PropsWithChildren } from "react";

import { useSetupAxios } from "@/hooks";

import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import ToastNotification from "./ToastNotification";

type OauthEventDetail = {
  message: string | null;
  accessToken: string | null;
};

declare global {
  interface WindowEventMap {
    oauth: CustomEvent<OauthEventDetail>;
  }
}

export default function AppLayout({ children }: PropsWithChildren) {
  useSetupAxios(axios);

  return (
    <>
      <AppHeader />
      <Box component="main">{children}</Box>
      <AppFooter />
      <ToastNotification />
    </>
  );
}

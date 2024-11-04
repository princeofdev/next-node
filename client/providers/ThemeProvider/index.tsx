"use client";

import { createTheme, ThemeProvider as Provider } from "@mui/material/styles";
import { PropsWithChildren } from "react";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobsm: true;
    mobmd: true;
    moblg: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#068932",
    },
    secondary: {
      main: "#F7F7F7",
    },
  },
  components: {
  },
  breakpoints: {
    values: {
      xs: 0,
      mobsm: 320,
      mobmd: 375,
      moblg: 425,
      tablet: 768,
      laptop: 1024,
      desktop: 1440,
    },
  },
});

export default function ThemeProvider({ children }: PropsWithChildren) {
  return <Provider theme={theme}>{children}</Provider>;
}

import { registerLocale } from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";
import { PropsWithChildren } from "react";

import AppLayout from "@/components/AppLayout";
import AppProvider from "@/providers";

import "./index.css";

registerLocale(en);

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <title>MVP</title>
        <link rel="icon" type="image/svg" href="/assets/logo/logo.svg" />
      </head>

      <body>
        <AppProvider>
          <AppLayout>{children}</AppLayout>
        </AppProvider>
      </body>
    </html>
  );
}

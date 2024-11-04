import { PropsWithChildren } from "react";

import IoProvider from "./IoProvider";
import QueryClientProvider from "./QueryClientProvider";
import StoreProvider from "./StoreProvider";
import ThemeProvider from "./ThemeProvider";

export default function AppProvider({ children }: PropsWithChildren) {
  return (
    <StoreProvider>
      <QueryClientProvider>
        <IoProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </IoProvider>
      </QueryClientProvider>
    </StoreProvider>
  );
}

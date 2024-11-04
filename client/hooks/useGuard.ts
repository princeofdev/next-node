"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useProfile } from "@/api/requests/user";
import { useIsAuthenticated } from "@/store/hooks/auth";

export function useGuard(authState: boolean | number, redirectPath: string) {
  const router = useRouter();

  const isAuthenticated = useIsAuthenticated();
  const { data: me } = useProfile();

  useEffect(
    () => {
      if (isAuthenticated && me && !me.username) {
        router.replace("/complete");
      } else if (isAuthenticated !== authState) {
        router.replace(redirectPath);
      }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [isAuthenticated, me],
  );
}

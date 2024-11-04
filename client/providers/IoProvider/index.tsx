"use client";

import { useQueryClient } from "@tanstack/react-query";
import { entries } from "lodash";
import { useRouter } from "next/navigation";
import { createContext, PropsWithChildren, useContext, useEffect } from "react";
import { io, Socket } from "socket.io-client";

import { QueryKey } from "@/api/types";
import { useAccessToken } from "@/store/hooks/auth";

type FollowEvent = {
  username: string;
};

type LogoutEvent = {
  message: string;
};

const uri = process.env.NEXT_PUBLIC_BASE_SOCKET_URI;

const socket: Socket = io(uri || "", {
  autoConnect: false,
});

const IoContext = createContext(socket);

export function useSocket() {
  return useContext(IoContext);
}

export function useFollow() {
  const socket = useSocket();
  return (username: string) => socket.emit("follow", { username });
}

export function useUnfollow() {
  const socket = useSocket();
  return (username: string) => socket.emit("unfollow", { username });
}

export default function IoProvider(props: PropsWithChildren) {
  const accessToken = useAccessToken();

  useEffect(() => {
    if (accessToken) {
      socket.auth = { accessToken };
      socket.connect();
    } else {
      socket.disconnect();
    }

    return () => {
      if (socket.connected) {
        socket.disconnect();
      }
    };
  }, [accessToken]);

  const queryClient = useQueryClient();

  const router = useRouter();

  useEffect(
    () => {
      const eventHandlers = {
        follow({ username }: FollowEvent) {
          queryClient.invalidateQueries({
            queryKey: [QueryKey.Following, username],
          });
        },
        unfollow({ username }: FollowEvent) {
          queryClient.invalidateQueries({
            queryKey: [QueryKey.Following, username],
          });
        },
        logout({ message }: LogoutEvent) {
          router.replace(encodeURI(`/logout/${message}`));
        },
      };

      entries(eventHandlers).map(([ev, listener]) => socket.on(ev, listener));

      return () => {
        entries(eventHandlers).map(([ev, listener]) =>
          socket.off(ev, listener),
        );
      };
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return <IoContext.Provider value={socket} {...props} />;
}

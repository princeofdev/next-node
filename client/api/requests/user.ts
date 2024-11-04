import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { User } from "@/types/User";

import {
  QueryKey,
} from "../types";

const baseURL = `${process.env.NEXT_PUBLIC_BASE_API_URL}/user`;

export async function requestProfile(username: string) {
  const { data } = await axios.get<User>(`/profile/${username}`, { baseURL });
  return data;
}

export function useProfile(username: string = "!") {
  return useQuery<User>({
    queryKey: [QueryKey.Profile, username],
    queryFn: () => requestProfile(username),
  });
}
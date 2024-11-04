import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { User } from "@/types/User";

import { QueryKey } from "../types";

const baseURL = `${process.env.NEXT_PUBLIC_BASE_API_URL}/network`;

export async function requestFollowers() {
  const { data } = await axios.get<Pick<User, "username">[]>(`/follower`, {
    baseURL,
  });
  return data;
}

export function useFollowers() {
  return useQuery({
    queryKey: [QueryKey.Followers],
    queryFn: requestFollowers,
  });
}

export async function requestFollowings() {
  const { data } = await axios.get<Pick<User, "username">[]>(`/following`, {
    baseURL,
  });
  return data;
}

export function useFollowings() {
  return useQuery({
    queryKey: [QueryKey.Followings],
    queryFn: requestFollowings,
  });
}

export async function requestFollowing(username?: string) {
  const { data } = await axios.get<boolean>(`/following/${username}`, {
    baseURL,
  });
  return data;
}

export function useFollowing(username?: string) {
  return useQuery({
    queryKey: [QueryKey.Following, username],
    queryFn: () => requestFollowing(username),
  });
}

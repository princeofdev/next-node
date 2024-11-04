import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

import { AuthState } from "@/store/types/auth";

import {
  QueryKey,
} from "../types";

const baseURL = `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth`;

// export async function requestLogin(values: LoginFormValues) {
//   const { data } = await axios.post<AuthState>("login", values, {
//     baseURL,
//   });
//   return data;
// }

// export function useRequestLogin() {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: requestLogin,
//     onSuccess: () =>
//       queryClient.invalidateQueries({ queryKey: [QueryKey.Profile, "!"] }),
//   });
// }

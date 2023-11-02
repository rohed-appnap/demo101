import { useQuery } from "react-query";

import { UserData } from "@/types/User";

import { getUserApi } from "../api-endpoints/user";

export const useGetUser = (page: number, queryOptions: any) => {
  return useQuery<UserData, Error>({
    queryKey: ["users", page],
    queryFn: () => getUserApi(page),
    keepPreviousData: true,
    ...queryOptions,
    select: (res) => {
      return res.data;
    },
  });
};

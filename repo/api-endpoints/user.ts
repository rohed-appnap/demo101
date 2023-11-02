import apiClient from "@/services/api-client";
import { UserData } from "@/types/User";

export const getUserApi = (page: number): Promise<UserData> => {
  return apiClient({
    url: `/users?page=${page}`,
  });
};

import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import {
  QueryClient,
  UseMutationOptions,
  useMutation,
} from "@tanstack/react-query";

export function useMutationInvalidation<T>(
  options: UseMutationOptions<
    AxiosResponse<{ message: string }, unknown>,
    AxiosError,
    T,
    unknown
  >,
  queryKey: (string | number)[]
) {
  const queryClient = new QueryClient();

  return useMutation<
    AxiosResponse<{ message: string }, unknown>,
    AxiosError,
    T,
    unknown
  >({
    onSuccess: (res: AxiosResponse<{ message?: string }, unknown>) => {
      queryClient.invalidateQueries({ queryKey: queryKey });
      res.data.message && toast.success(res.data.message);
    },
    onError: (error: AxiosError) => {
      console.log(error.response?.data);
      if (error.response?.data) {
        toast.error(error.response.data as string);
      }
    },
    ...options,
  });
}
